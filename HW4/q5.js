// Create an array of student objects
const students = [
    { name: "Muaz", age: 20, grade: 90 },
    { name: "Mani", age: 22, grade: 80 },
    { name: "Bilal", age: 21, grade: 85 },
    { name: "Ahmad", age: 23, grade: 92 },
    { name: "Ashtar", age: 19, grade: 78 },
];

// top students
function getTopStudents(students) {
    const topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade >= 85) {
            topStudents[topStudents.length]=students[i];
        }
    }
    
    return topStudents;
}

// avg grade
function averageGrade(students) {
    let totalGrades = 0;
    for (let i = 0; i < students.length; i++) {
        totalGrades += students[i].grade;
    }
    return totalGrades / students.length;
}
//topstudents
//console.log("Top Students (Grade >= 85):");
//for (let i = 0; i < topStudents.length; i++) {
  //  console.log("Name: " + topStudents[i].name + ", Age: " + topStudents[i].age + ", Grade: " + topStudents[i].grade);
//}
// Testing
const topStudents = getTopStudents(students);
const avgGrade = averageGrade(students);

// Print the results
console.log("Top Students (Grade >= 85):");
for (let i = 0; i < topStudents.length; i++) {
    console.log("Name: " + topStudents[i].name + ", Age: " + topStudents[i].age + ", Grade: " + topStudents[i].grade);
}
//to fix is used for 2 decimal place
console.log("Average Grade of All Students: " + avgGrade.toFixed(2));
