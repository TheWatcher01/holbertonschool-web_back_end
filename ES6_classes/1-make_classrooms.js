/**
 * @file 1-make_classrooms.js
 * @author TheWatcher01
 * @date 11-05-2024
 * @description This file contains the function to initialize classrooms.
 */

import ClassRoom from './0-classroom';

/**
 * @function initializeRooms
 * @description Creates and returns an array of ClassRoom instances.
 * @returns {Array<ClassRoom>} An array of ClassRoom instances.
 */
export default function initializeRooms() {
  /**
   * @description Create a new ClassRoom instance with a maximum size of 19 students.
   * @type {ClassRoom}
   */
  const class1 = new ClassRoom(19);

  /**
   * @description Create a new ClassRoom instance with a maximum size of 20 students.
   * @type {ClassRoom}
   */
  const class2 = new ClassRoom(20);

  /**
   * @description Create a new ClassRoom instance with a maximum size of 34 students.
   * @type {ClassRoom}
   */
  const class3 = new ClassRoom(34);

  // Return an array of the created ClassRoom instances.
  return [class1, class2, class3];
}
