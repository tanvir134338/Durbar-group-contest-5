function groupStudentsByGradeBand(students) {
  const result = {
    A: [],
    B: [],
    C: [],
    F: [],
  };

  return students.reduce((acc, student) => {
    if (student.marks >= 80) {
      acc.A.push(student);
    } else if (student.marks >= 70) {
      acc.B.push(student);
    } else if (student.marks >= 60) {
      acc.C.push(student);
    } else {
      acc.F.push(student);
    }

    return acc;
  }, result);
}

console.log(
  groupStudentsByGradeBand([
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 72 },
    { name: "Charlie", marks: 58 },
    { name: "David", marks: 91 },
  ]),
);
// A: Alice, David
// B: Bob
// C: []
// F: Charlie

console.log(
  groupStudentsByGradeBand([
    { name: "Eve", marks: 65 },
    { name: "Frank", marks: 60 },
  ]),
);
// A: []
// B: []
// C: Eve, Frank
// F: []

console.log(groupStudentsByGradeBand([]));
// { A: [], B: [], C: [], F: [] }

console.log(
  groupStudentsByGradeBand([
    { name: "A1", marks: 80 },
    { name: "B1", marks: 79 },
    { name: "C1", marks: 60 },
    { name: "F1", marks: 59 },
  ]),
);
// A: A1
// B: B1
// C: C1
// F: F1

console.log(
  groupStudentsByGradeBand([
    { name: "Perfect", marks: 100 },
    { name: "Zero", marks: 0 },
  ]),
);
// A: Perfect
// F: Zero

console.log(
  groupStudentsByGradeBand([
    { name: "Alice", marks: 95 },
    { name: "Bob", marks: 90 },
    { name: "Charlie", marks: 85 },
    { name: "David", marks: 80 },
  ]),
);
// A: Alice, Bob, Charlie, David
// B: []
// C: []
// F: []

console.log(
  groupStudentsByGradeBand([
    { name: "A", marks: 79 },
    { name: "B", marks: 75 },
    { name: "C", marks: 70 },
  ]),
);
// A: []
// B: A, B, C
// C: []
// F: []

console.log(
  groupStudentsByGradeBand([
    { name: "A", marks: 69 },
    { name: "B", marks: 65 },
    { name: "C", marks: 60 },
  ]),
);
// A: []
// B: []
// C: A, B, C
// F: []

console.log(
  groupStudentsByGradeBand([
    { name: "A", marks: 59 },
    { name: "B", marks: 30 },
    { name: "C", marks: 1 },
  ]),
);
// A: []
// B: []
// C: []
// F: A, B, C

console.log(
  groupStudentsByGradeBand([
    { name: "Tanvir", marks: 88 },
    { name: "Rahim", marks: 76 },
    { name: "Karim", marks: 64 },
    { name: "Hasan", marks: 45 },
    { name: "Nabil", marks: 100 },
    { name: "Siam", marks: 70 },
    { name: "Rafi", marks: 59 },
  ]),
);
// A: Tanvir, Nabil
// B: Rahim, Siam
// C: Karim
// F: Hasan, Rafi
