/**
 * @file 2-read_file.js
 * @author TheWatcher01
 * @date 31-01-2025
 * @description Function that reads a file and prints the number of students and their names
 */

const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n').filter((line) => line.length > 0);
    const lines = data;
    const students = lines.slice(1);

    console.log(`Number of students: ${students.length}`);

    const fields = {};
    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fields[field]) {
        fields[field] = { count: 0, names: [] };
      }
      fields[field].count += 1;
      fields[field].names.push(firstname);
    });

    for (const [field, data] of Object.entries(fields)) {
      console.log(
        `Number of students in ${field}: ${data.count}. List: ${data.names.join(', ')}`,
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
