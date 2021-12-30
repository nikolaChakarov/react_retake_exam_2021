const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');

const User = require('../models/User');
const Art = require('../models/Art');

router.post('/create', isAuth, async (req, res, next) => {

    try {

        const authorId = req.user._id; // comes from the isAuth middlewares;
        const author = await User.findById({ _id: authorId });

        const { title, description } = req.body;

        const art = new Art({ title, description, author: authorId });
        await art.save();

        author.arts.push(art._id);
        await author.save();

        // const test = await User.findById(authorId).populate('arts');

        res.status(200).json(art);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: err.message });
    }

});



module.exports = router;