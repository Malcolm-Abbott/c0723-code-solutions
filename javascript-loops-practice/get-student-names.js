/* exported getStudentNames */
function getStudentNames(students) {
  const newStudents = [];
  let oldStudents;
  for (let i = 0; i < students.length; i++) {
    oldStudents = students[i];
    for (const key in oldStudents) {
      newStudents.push(oldStudents[key]);
    }
  }
  return newStudents;
}
