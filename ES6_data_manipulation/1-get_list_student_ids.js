/**
 * @file 1-get_list_student_ids.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description Module exports function that returns array of student IDs from list of
 * student objects.
 */

/**
 * @function getListStudentIds
 * @description Function to get an array of student IDs from a list of student objects.
 * If the input is not an array, the function returns an empty array.
 * @param {Array} students - Array of student objects. Each student object should have `id` property
 * @returns {Array} Array of student IDs. If the input is not an array, returns an empty array.
 */
export default function getListStudentIds(students) {
  // Check if the input is an array. If not, return an empty array.
  if (!Array.isArray(students)) {
    return [];
  }

  // Use the Array.prototype.map method to create a new array containing the IDs of the students.
  // The map method calls a provided function once for each element in an array, in order.
  return students.map((student) => student.id);
}
