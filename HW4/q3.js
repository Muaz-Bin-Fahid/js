//Question#3
// Prompt the user to enter the upper limit
let upperLimit = parseInt(prompt("Enter the upper limit greater than 0:"));

if ( upperLimit > 0) {
    let sum = 0;

    // Iterate from 1 
    for (let i = 1; i < upperLimit; i++) {
        // Check multiple of 3 or 5
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i; //  cumulative sum
        }
    }

    // Print the final sum
    console.log(
        "The sum of all multiples of 3 and 5 below "+ upperLimit+" is:" +sum
    );
} else {
    console.log("Invalid input. Please enter a positive integer greater than 0.");
}
