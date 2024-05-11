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
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;

    if (typeof length !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = length;

    if (!Array.isArray(students) || students.every((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents) || newStudents.every((student) => typeof student !== 'string')) {
      throw TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
