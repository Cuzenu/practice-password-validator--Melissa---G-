const readline = require('readline-sync');

// Working with Loops Lesson 4 - Practice Password Validator
// Create a password validator that checks if the password meets the following criteria:

// Password requirements
// 1. at least 8 characters long
// 2. contains at least one uppercase letter
// 3. contains at least one number
// 4. if the password does not meet all requiremeents 1-3, the program should prommpt the user to keep entering a password until it meets all requirements.

// Prompt the user for a password
let password; 
password = readline.question('Please enter a password: ');

// Use a do..while loop to validate the password length
do {
    if (password.length < 8) {
        console.log("Password must be at least 8 characters long.");
        password = readline.question('Please enter a password: ');
    }
} while (password.length < 8);
console.log("Password is long enough.");

// Use a for ...of loop to check for uppercase letters
let hasUppercase = false;
for (const char of password) {
    if (char === char.toUpperCase() && isNaN(char)) {
        hasUppercase = true;
        console.log("Password contains an upper case character.");
        break;
    }
}
if (!hasUppercase) {
    console.log("Password must contain at least one uppercase letter.");
    password = readline.question('Please enter a password with one uppercase letter: ');
}


// Valitate the password for numbers using a for loop
do {
    let hasNumber = false;
    for (const char of password) {
        if (!isNaN(char)) {
            hasNumber = true;
            console.log("Password contains a number.");
            break;
        }
    }
    if (!hasNumber) {
        console.log("Password must contain at least one number.");
        password = readline.question('Please enter a password with one number: ');
    }
} while (hasNumber == false);

console.log("Password is valid.");