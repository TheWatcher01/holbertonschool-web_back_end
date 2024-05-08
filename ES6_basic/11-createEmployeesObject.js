/**
 * @file 11-createEmployeesObject.js
 * @author TheWatcher01
 * @date 08-05-2024
 * @description This module exports a function that creates an employee object.
 */

/**
 * @function createEmployeesObject
 * @description Creates an object with a department name as key and employees array as value.
 * @param {string} departmentName - The name of the department.
 * @param {Array.<string>} employees - An array of employee names.
 * @returns {Object} An object with department name as key and employees array as value.
 */
export default function createEmployeesObject(departmentName, employees) {
  return { [departmentName]: employees };
}
