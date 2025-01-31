/**
 * @file 2-read_file.js
 * @author TheWatcher01
 * @date 31-01-2025
 * @description Function that reads a file and prints the number of students and their names
 */

const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously and split its content by new lines, filtering out any empty lines
    const data = fs.readFileSync(path, 'utf8').split('\n').filter((line) => line.length > 0);
    const lines = data;

    // Extract student data, ignoring the header line
    const students = lines.slice(1);

    // Log the total number of students
    console.log(`Number of students: ${students.length}`);

    // Initialize an object to store the count and names of students in each field
    const fields = {};
    students.forEach((student) => {
      // Destructure the student data to get the first name and field
      const [firstname, , , field] = student.split(',');

      // If the field is not already in the fields object, initialize it
      if (!fields[field]) {
        fields[field] = { count: 0, names: [] };
      }

      // Increment the count and add the student's first name to the list
      fields[field].count += 1;
      fields[field].names.push(firstname);
    });

    // Log the number of students and their names for each field
    for (const [field, data] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`,
      );
    }
  } catch (error) {
    // Throw an error if the file cannot be read
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
