/**
 * @file server.js
 * @author TheWatcher01
 * @date 03-02-2025
 * @description A simple Express server that handles different routes.
 */

const express = require('express');
const routes = require('./routes');

const app = express();
const port = 1245;

app.use('/', routes);

app.listen(port);

// Export the app for testing purposes
module.exports = app;
