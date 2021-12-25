const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },

    description: {
        type: String,
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    }
});

const Art = mongoose.model('art', artSchema);
module.exports = Art;