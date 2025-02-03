/**
 * @file 6-http_express.js
 * @author TheWatcher01
 * @date 31-01-2025
 * @description A simple Express server.
 */

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
