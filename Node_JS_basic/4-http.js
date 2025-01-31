/**
 * @file 4-http.js
 * @author TheWatcher01
 * @date 31-01-2025
 * @description Basic HTTP server that responds with "Hello Holberton School!".
 */

const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the response HTTP header with status and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body "Hello Holberton School!"
  res.end('Hello Holberton School!');
});

// Define the port to listen on
const PORT = 1245;

// The server listens on the specified port
app.listen(PORT);

// Export the app for use in other modules
module.exports = app;
