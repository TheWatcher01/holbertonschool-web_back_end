/**
 * @file 2-hbtn_course.js
 * @author TheWatcher01
 * @date 11-05-2024
 * @description Holberton Course class definition
 */

/**
 * @class HolbertonCourse
 * @description Holberton Course class definition
 * @export HolbertonCourse
 */
export default class HolbertonCourse {
  /**
   * @constructor HolbertonCourse
   * @param {string} name - The name of the course
   * @param {number} length - The length of the course
   * @param {Array<string>} students - The students in the course
   * @throws {TypeError} - If the name is not a string
   * @throws {TypeError} - If the length is not a number
   * @throws {TypeError} - If the students is not an array of strings
   */
  constructor(name, length, students) {
    this.name = name; // Utilize the setter to validate
    this.length = length; // Utilize the setter to validate
    this.students = students; // Utilize the setter to validate
  }

  // Private method to validate the name
  _validateName(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
  }

  // Private method to validate the length
  _validateLength(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
  }

  // Private method to validate the students array
  _validateStudents(students) {
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._validateName(newName);
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._validateLength(newLength);
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._validateStudents(newStudents);
    this._students = newStudents;
  }
}
