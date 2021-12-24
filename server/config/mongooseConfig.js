const mongoose = require('mongoose');
const db = process.env.DB_HOST;

const mongooseConfig = () => {

    return mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(res => {
            console.log('db connected!');
        })
        .catch(err => {
            console.error(err);
        });

}

module.exports = mongooseConfig;