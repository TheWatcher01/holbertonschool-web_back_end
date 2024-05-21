/**
 * @file 4-update_grade_by_city.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description This module exports a function that returns an array of students for a specific city
 * with their new grade.
 */

/**
 * @function updateStudentGradeByCity
 * @description Returns an array of students for a specific city with their new grade.
 * If a student does not have a new grade, their grade is set to 'N/A'.
 * @param {Array} students - The array of students.
 * @param {string} city - The city to filter the students by.
 * @param {Array} newGrades - Array of new grades. Each grade is object with studentId & grade.
 * @returns {Array} An array of students for the specified city with their new grade.
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city) // Filter the students by the specified city.
    // For each student in the filtered list:
    .map((student) => {
      // Find new grade for student.
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
      // Return a new object with the student's data and their new grade.
      return {
        // If student has new grade, set it. Otherwise, set it to 'N/A'.
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
