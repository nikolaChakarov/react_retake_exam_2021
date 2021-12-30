const mongoose = require('mongoose');

const userShema = new mongoose.Schema({
    username: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    arts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'art'
        }
    ]
});

const User = mongoose.model('user', userShema);

module.exports = User;