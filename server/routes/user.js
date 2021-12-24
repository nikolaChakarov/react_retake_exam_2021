const router = require('express').Router();

router.get('/login', (req, res, next) => {

    res.send(req.body)

});

module.exports = router;