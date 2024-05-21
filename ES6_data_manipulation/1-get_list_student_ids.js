/**
 * @file 1-get_list_student_ids.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description This module contains a function that returns an array of ids from a list of object.
 */

export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => student.id);
}
