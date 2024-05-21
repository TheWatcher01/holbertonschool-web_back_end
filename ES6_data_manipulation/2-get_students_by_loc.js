/**
 * @file 2-get_students_by_loc.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description This module contains a function that returns a list of students by location.
 */

export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
