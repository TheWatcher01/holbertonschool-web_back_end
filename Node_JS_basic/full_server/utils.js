/**
 * @file utils.js
 * @author TheWatcher01
 * @date 03-02-2025
 * @description A utility function to read a database file and return the data in a specific format.
 */

const fs = require('fs').promises;

const readDatabase = async (path) => {
  if (!path) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    const students = lines.slice(1);
    const studentsByField = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstname);
    });

    return studentsByField;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = readDatabase;
