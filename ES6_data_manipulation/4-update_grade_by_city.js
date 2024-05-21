/**
 * @file 4-update_grade_by_city.js
 * @author TheWatcher01
 * @date 21-05-2024
 * @description Module contains function that returns array of students for specific city with
 * their new grade.
 */

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
