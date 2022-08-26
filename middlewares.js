const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

module.exports = app => {
    app.set('port', 3000);
    app.set('json spaces', 4);
    app.use(cors());
    app.use(bodyParser.json());
    app.use(app.auth.initialize());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
    app.use(express.static('public'));
};
