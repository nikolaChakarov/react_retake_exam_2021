const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');

router.post('/login', async (req, res, next) => {

    try {

        const username = req.body.username.trim();
        const password = req.body.password.trim();

        let user = await User.findOne({ username });

        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isPassOk = await bcrypt.compare(password, user.password);

        if (!isPassOk) {
            throw new Error('Invalid credentials');
        }

        const token = jwt.sign({
            payload: user
        }, process.env.SECRET, { expiresIn: 36000 });

        res.status(200).json({ id: user._id, username: user.username, token })


    } catch (err) {
        res.status(400).json({
            msg: err.message
        })
    }

});

router.post('/register', [
    body('username')
        .isLength({ min: 3 })
        .withMessage('user name should be 3 characters long or more'),
    body('password')
        .isLength({ min: 3 })
        .withMessage('password name should be 3 characters long or more')
        .matches(/[A-Za-z]/)
        .withMessage('password must contain a letter'),
], async (req, res, next) => {

    try {
        const validation = validationResult(req);

        if (!validation.isEmpty()) {
            const errorMessages = validation.errors.reduce((acc, curr) => {
                acc.push(curr.msg);
                return acc;
            }, []);

            const message = errorMessages.join(', ');

            throw new Error(message);
        }
        const { username, password, password2 } = req.body;

        if (password !== password2) {
            throw new Error('Passwords are not the same.')
        }

        let user = await User.findOne({ username });

        if (user) {
            throw new Error('Username is already taken.');
        }

        const hashed = await bcrypt.hash(password, Number(process.env.SALT));

        user = new User({ username, password: hashed });
        await user.save();

        // json webtoken
        const token = jwt.sign({
            payload: user
        }, process.env.SECRET, { expiresIn: 36000 });

        res.status(200).json({ id: user._id, username: user.username, token });

    } catch (err) {
        console.error(err.message);
        res.status(400).json({ msg: err.message })
    }

});

module.exports = router;