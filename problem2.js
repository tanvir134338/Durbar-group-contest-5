function formatAttendanceReport(students) {
  return students.map((student) => {
    const name = student.name;
    const present = student.present;
    const total = student.total;

    const percentage = Math.round((present / total) * 100);

    let status;

    if (percentage >= 90) {
      status = "Excellent";
    } else if (percentage >= 75) {
      status = "Good";
    } else {
      status = "At Risk";
    }

    return `${name}: ${present}/${total} (${percentage}%) - ${status}`;
  });
}

console.log(
  formatAttendanceReport([
    { name: "Lina", present: 15, total: 20 },
    { name: "Sam", present: 12, total: 20 },
  ]),
);

console.log(
  formatAttendanceReport([
    { name: "Rafi", present: 18, total: 20 },
    { name: "Lina", present: 15, total: 20 },
    { name: "Sam", present: 12, total: 20 },
  ]),
);
// [
//   "Rafi: 18/20 (90%) - Excellent",
//   "Lina: 15/20 (75%) - Good",
//   "Sam: 12/20 (60%) - At Risk"
// ]

console.log(
  formatAttendanceReport([{ name: "Alice", present: 20, total: 20 }]),
);
// ["Alice: 20/20 (100%) - Excellent"]

console.log(formatAttendanceReport([{ name: "Bob", present: 0, total: 20 }]));
// ["Bob: 0/20 (0%) - At Risk"]

console.log(
  formatAttendanceReport([
    { name: "A", present: 90, total: 100 },
    { name: "B", present: 89, total: 100 },
    { name: "C", present: 80, total: 100 },
    { name: "D", present: 79, total: 100 },
    { name: "E", present: 75, total: 100 },
    { name: "F", present: 74, total: 100 },
    { name: "G", present: 60, total: 100 },
    { name: "H", present: 59, total: 100 },
  ]),
);
// [
//   "A: 90/100 (90%) - Excellent",
//   "B: 89/100 (89%) - Good",
//   "C: 80/100 (80%) - Good",
//   "D: 79/100 (79%) - Good",
//   "E: 75/100 (75%) - Good",
//   "F: 74/100 (74%) - At Risk",
//   "G: 60/100 (60%) - At Risk",
//   "H: 59/100 (59%) - At Risk"
// ]

console.log(
  formatAttendanceReport([{ name: "RoundUp", present: 89, total: 99 }]),
);
// ["RoundUp: 89/99 (90%) - Excellent"]

console.log(
  formatAttendanceReport([{ name: "RoundDown", present: 88, total: 99 }]),
);
// ["RoundDown: 88/99 (89%) - Good"]

console.log(formatAttendanceReport([]));
// []

console.log(
  formatAttendanceReport([
    { name: "One", present: 1, total: 1 },
    { name: "None", present: 0, total: 1 },
  ]),
);
// [
//   "One: 1/1 (100%) - Excellent",
//   "None: 0/1 (0%) - At Risk"
// ]

console.log(
  formatAttendanceReport([
    { name: "Student1", present: 7, total: 10 },
    { name: "Student2", present: 8, total: 10 },
    { name: "Student3", present: 9, total: 10 },
  ]),
);
// [
//   "Student1: 7/10 (70%) - At Risk",
//   "Student2: 8/10 (80%) - Good",
//   "Student3: 9/10 (90%) - Excellent"
// ]

console.log(
  formatAttendanceReport([
    { name: "Tanvir", present: 95, total: 100 },
    { name: "Rahim", present: 82, total: 100 },
    { name: "Karim", present: 68, total: 100 },
    { name: "Hasan", present: 45, total: 100 },
  ]),
);
// [
//   "Tanvir: 95/100 (95%) - Excellent",
//   "Rahim: 82/100 (82%) - Good",
//   "Karim: 68/100 (68%) - At Risk",
//   "Hasan: 45/100 (45%) - At Risk"
// ]
