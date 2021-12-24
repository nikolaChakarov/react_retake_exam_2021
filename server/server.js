const express = require('express');
require('dotenv').config();

const app = express();

const expressConfig = require('./config/expressConfig');
expressConfig(app);

const mongooseConfig = require('./config/mongooseConfig');


const PORT = process.env.PORT;

mongooseConfig()
    .then(res => {
        app.listen(PORT, () => {
            console.log(`Server is listening at port: ${PORT}`);
        })
    })
    .catch(err => console.error(err));