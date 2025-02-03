/**
 * @file StudentsController.js
 * @author TheWatcher01
 * @date 03-02-2025
 * @description Controller for handling student-related routes.
 */

const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv[2];

    readDatabase(path)
      .then((studentsByField) => {
        const output = ['This is the list of our students'];
        const sortedFields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));

        for (const field of sortedFields) {
          const students = studentsByField[field];
          output.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }

        response.status(200).send(output.join('\n'));
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (!['CS', 'SWE'].includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return undefined;
    }

    const path = process.argv[2];

    return readDatabase(path)
      .then((studentsByField) => {
        const students = studentsByField[major] || [];
        response.status(200).send(`List: ${students.join(', ')}`);
      })
      .catch(() => response.status(500).send('Cannot load the database'));
  }
}

module.exports = StudentsController;
