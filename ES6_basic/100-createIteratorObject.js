/**
 * @file 100-createIteratorObject.js
 * @author TheWatcher01
 * @date 11-05-2024
 * @description Module exports function that creates array of all employees from report object.
 */

/**
 * @function createIteratorObject
 * @description Creates array of all employees from report object.
 * Report object should have property 'allEmployees' which is object where each property is
 * department and its value is an array of employees in that department.
 *
 * @param {Object} report - The report object containing all employees segregated by departments.
 * @returns {Array} An array containing all employees from all departments.
 */
export default function createIteratorObject(report) {
  // Initialize an empty array to hold all employees
  const allEmployees = [];

  // Iterate over each department in the report
  for (const employees of Object.values(report.allEmployees)) {
    // Iterate over each employee in the department
    for (const employee of employees) {
      // Add the employee to the allEmployees array
      allEmployees.push(employee);
    }
  }

  // Return the array of all employees
  return allEmployees;
}
