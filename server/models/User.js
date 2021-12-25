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
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product'
        }
    ]
});

const User = mongoose.model('user', userShema);

module.exports = User;