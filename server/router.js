const router = require('express').Router();

router.use('/api/user', require('./routes/user'));

module.exports = router;