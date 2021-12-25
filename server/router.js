const router = require('express').Router();

router.use('/api/user', require('./routes/user'));

router.use('/api/art', require('./routes/art'));

module.exports = router;