/*function handleLogin() {
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate login
    const message = document.getElementById("message");
    if (!username) {
        console.log("Must enter user name");
        alert ("Must enter the user name");
       
        return;
    }

    if (password.length < 8) {
       alert("Password must be 8 character long");
       console.log("Must be 8 character long");
        return;
    }
    else{
        alert("Login sussecful");
    }
}*/
//Question#2
/*function Discount(age, hasPremiumMembership) {
    // Check if the customer is over 60 or has a premium membership
    if (age > 60 || hasPremiumMembership==true) {
        console.log("The customer is eligible for a discount.");
        return true;
    } else {
        console.log("The customer is not eligible for a discount.");
        return false;
    }
}


Discount(65, false);  
Discount(40, true);  
Discount(30, false); */
//Question#3
/*
function checkAlarm(isDoorClose, isWindowClose) {
    // Trigger alarm if only one (door or window) is open
    if (isDoorClose&& isWindowClose) { // XOR logic
        console.log("All secure: Both are closed or both are open.");
        
    } else {
        console.log("Alarm triggered");
       
    }
}

// Test the function
checkAlarm(true, false);  
checkAlarm(false, true);  
checkAlarm(false, false); 
checkAlarm(true, true);   
*/
//Question#4
function Divide(num1, num2) {
    // Check for division by zero
    if (num2 === 0) {
        console.log("Error: Division by zero is not allowed.");
       
    }
    let result = num1 / num2;
    console.log(`The result of dividing ${num1} by ${num2} is: ${result}`);
    
}

// Test the function
Divide(10, 2);  
Divide(10, 0); 
Divide(0, 10);  

//Question#5
/*function parseJSON(jsonString) {
    try {
        // Attempt to parse the JSON string
        const result = JSON.parse(jsonString);
        console.log("Parsed JSON:", result);
       
    } catch (error) {
        // Handle the error if JSON is invalid
        console.error("Error: Invalid JSON string.");
       
    }
}
*/
/*
// Test the function with valid and invalid JSON strings
const validJSON = '{"name": "Alice", "age": 25}';
const invalidJSON = '{"name": "Alice", "age": 25';

console.log(parseJSON(validJSON));   
console.log(parseJSON(invalidJSON));
//Q#6
function readFile(filePath) {
    try {
        // Check if the file path ends with ".txt"
        if (!filePath.endsWith(".txt")) {
            throw new Error("Invalid file type. Only .txt files are allowed.");
        }
        // Simulate reading the file
        console.log(`Reading file: ${filePath}`);
      
    } catch (error) {
        // Handle the error if the file type is invalid
        console.error(error.message);
        
    }
}

// Test the function
console.log(readFile("document.txt")); 
console.log(readFile("image.png"));    */
