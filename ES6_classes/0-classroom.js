/**
 * @file 0-classroom.js
 * @author TheWatcher01
 * @date 11-05-2024
 * @description This file contains the ClassRoom class definition.
 */

/**
 * @class ClassRoom
 * @description Represents a classroom with a maximum number of students.
 */
export default class ClassRoom {
  /**
   * @constructor ClassRoom
   * @param {number} maxStudentsSize
   * Maximum number of students that classroom can accommodate.
   */
  constructor(maxStudentsSize) {
    /**
     * @property {number} _maxStudentsSize
     * Maximum number of students that classroom can accommodate.
     * @private
     */
    this._maxStudentsSize = maxStudentsSize;
  }
}
