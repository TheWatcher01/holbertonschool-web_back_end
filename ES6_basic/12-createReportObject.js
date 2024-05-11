/**
 * @file 12-createReportObject.js
 * @author TheWatcher01
 * @date 11-05-2024
 * @description Module exports function that creates a report object encapsulating all employees
 * across departments and provides a method to count the number of departments.
 */

/**
 * @function createReportObject
 * @description Creates report object that encapsulates list of all employees segregated by
 * departments and provides method to retrieve the count of departments.
 *
 * @param {Object} employeesList - An object containing department names as keys and
 *                                 arrays of employee names as values.
 * @returns {Object} An object encapsulating a list of all employees segregated by departments and
 *  method to retrieve the count of departments.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    /**
     * @method getNumberOfDepartments
     * @description Retrieves the count of departments in the employees list.
     * This method counts the number of keys in the provided object.
     *
     * @param {Object} employeesList - An object with departments as keys.
     * @returns {number} The count of departments.
     */
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
}
