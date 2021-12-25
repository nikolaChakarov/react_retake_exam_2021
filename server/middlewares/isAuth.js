const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {

    const token = req.headers['x-auth-token'];

    if (!token) {
        res.status(401).json({ msg: 'Invalid token. Authorization denied!' });
        return;
    }

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ msg: 'Server Errror' });
        }

        req.user = decoded.payload;
        next();
    })
}

module.exports = isAuth;