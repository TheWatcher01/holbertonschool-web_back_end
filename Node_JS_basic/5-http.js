/**
 * @file 5-http.js
 * @author TheWatcher01
 * @date 31-01-2025
 * @description HTTP server that displays student information from a database
 */

const http = require('http');
const fs = require('fs').promises;

/**
 * Counts students in different fields from a database file
 * @param {string} path - Path to the database file
 * @returns {Promise<string>} - Formatted string with student counts and lists
 */
async function countStudents(path) {
  try {
    // Read and process the database file
    const fileContent = await fs.readFile(path, 'utf8');
    const lines = fileContent.split('\n').filter((line) => line.length > 0);
    const students = lines.slice(1); // Remove header line

    // Initialize output string with total student count
    let output = `Number of students: ${students.length}\n`;

    // Group students by field
    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = { count: 0, names: [] };
      }
      fields[field].count += 1;
      fields[field].names.push(firstname);
    });

    // Add each field's statistics to output string
    for (const [field, data] of Object.entries(fields)) {
      output += `Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}\n`;
    }

    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Handle different routes
  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;

    case '/students':
      try {
        // Get database path from command line arguments
        const databasePath = process.argv[2];
        if (!databasePath) {
          throw new Error('Cannot load the database');
        }

        // Combine introduction text with student data
        const introText = 'This is the list of our students\n';
        const studentData = await countStudents(databasePath);
        res.end(`${introText}${studentData}`);
      } catch (error) {
        res.end(error.message);
      }
      break;

    default:
      res.end('Hello Holberton School!');
  }
});

const port = 1245;
app.listen(port);

module.exports = app;
