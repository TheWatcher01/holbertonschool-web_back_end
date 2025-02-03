/**
 * @file 7-http_express.js
 * @author TheWatcher01
 * @date 31-01-2025
 * @description A more complex HTTP server using Express that handles different routes.
 */

const express = require('express');
const fs = require('fs').promises;

const app = express();

async function countStudents(path) {
  try {
    // Read the file content asynchronously
    const fileContent = await fs.readFile(path, { encoding: 'utf8' });
    // Split the file content into lines and filter out empty lines
    const lines = fileContent.split('\n').filter((line) => line.length > 0);
    // Exclude the header line
    const students = lines.slice(1);

    const output = [];
    output.push(`Number of students: ${students.length}`);

    const fields = {};
    // Iterate over each student line
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = { count: 0, names: [] };
      }
      fields[field].count += 1;
      fields[field].names.push(firstname);
    });

    // Format the output for each field
    for (const [field, data] of Object.entries(fields)) {
      output.push(`Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`);
    }

    return output.join('\n');
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the /students URL
app.get('/students', async (req, res) => {
  try {
    const database = process.argv[2];

    const output = ['This is the list of our students'];
    const studentData = await countStudents(database);
    output.push(studentData);

    res.send(output.join('\n'));
  } catch (err) {
    res.status(404).send('Cannot load the database');
  }
});

// Start the server on port 1245
app.listen(1245);

module.exports = app;
