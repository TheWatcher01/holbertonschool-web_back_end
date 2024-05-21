/**
 * @file 3-get_ids_sum.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description This module contains a function that returns the sum of all the student ids.
 */

export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
