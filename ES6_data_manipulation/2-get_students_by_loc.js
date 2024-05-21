/**
 * @file 2-get_students_by_loc.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description This module exports a function to filter students by location.
 */

/**
 * @function getStudentsByLocation
 * @description Filters a list of students by location.
 * @param {Array} students - Array of student objects.
 * @param {string} city - The city to filter by.
 * @returns {Array} Array of students from the specified city.
 */
export default function getStudentsByLocation(students, city) {
  // Use Array.prototype.filter method to create new array with all students that pass test.
  // The test is a function that checks if the student's location is equal to the specified city.
  return students.filter((student) => student.location === city);
}
