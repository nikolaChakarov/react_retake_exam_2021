const router = require('express').Router();
const isAuth = require('../middlewares/isAuth');

router.post('/create', isAuth, (req, res, next) => {

    let test = req.user;

    res.send('ok')

});

module.exports = router;