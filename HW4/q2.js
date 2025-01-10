//Question#2
// Prompt the user to enter the student's score
let score = parseInt(prompt("Enter the student's score (0-100):"));

// Variable to store the grade
let grade = "";

// Assign grade
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else if (score >= 0) {
    grade = "F";
} else {
    console.log("Invalid score. Please enter a number between 0 and 100.");
}

//  grade
switch (grade) {
    case "A":
        console.log("Great job! You got an A!");
        break;
    case "B":
        console.log("Well done! You got a B!");
        break;
    case "C":
        console.log("Good effort! You got a C.");
        break;
    case "D":
        console.log("You passed, but there's room for improvement. You got a D.");
        break;
    case "F":
        console.log("Unfortunately, you failed. You got an F. Better luck next time!");
        break;
    default:
        console.log("An error occurred. Please try again.");
}
