const express = require('express');
const router = require('../router');
const cors = require('cors');

const expressConfig = (app) => {

    app.use(express.json());

    app.use(express.urlencoded({ extended: true }));

    app.use(cors({
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200 // For legacy browser support
    }));

    app.use(router);
}

module.exports = expressConfig;