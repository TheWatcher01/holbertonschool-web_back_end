/**
 * @file 2-hbtn_course.js
 * @author TheWatcher01
 * @date 11-05-2024
 * @description This file contains the HolbertonCourse class definition.
 */

/**
 * @class HolbertonCourse
 * @description Represents a course with a name, length, and students.
 */
export default class HolbertonCourse {
  /**
   * @constructor HolbertonCourse
   * @description Constructs a new instance of the HolbertonCourse class.
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in hours.
   * @param {Array<string>} students - An array of student names enrolled in the course.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * @description Gets the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * @description Sets a new name for the course.
   * @param {string} newName - The new name of the course.
   * @throws {TypeError} If newName is not a string.
   */
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  /**
   * @description Gets the length of the course.
   * @returns {number} The length of the course.
   */
  get length() {
    return this._length;
  }

  /**
   * @description Sets a new length for the course.
   * @param {number} newLength - The new length of the course.
   * @throws {TypeError} If newLength is not a number.
   */
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  /**
   * @description Gets the students of the course.
   * @returns {Array<string>} An array of student names.
   */
  get students() {
    return this._students;
  }

  /**
   * @description Sets new students for the course.
   * @param {Array<string>} newStudents - An array of new student names.
   * @throws {TypeError} If newStudents is not an array.
   */
  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
