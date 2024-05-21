/**
 * @file 3-get_ids_sum.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description This module exports a function that calculates the sum of all student IDs.
 */

/**
 * @function getStudentIdsSum
 * @description Calculates the sum of all student IDs.
 * @param {Array} students - Array of student objects.
 *                           Each student object should have an `id` property.
 * @returns {number} The sum of all student IDs. If the input is not an array, returns 0.
 */
export default function getStudentIdsSum(students) {
  // Use Array.prototype.reduce method to calculate the sum of all student IDs.
  // Reduce method applies function against accumulator & each element in array...
  // (from left to right) to reduce it to a single output value.
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
