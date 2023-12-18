"use strict";
// Simple if statement:
// Check if the given number is greater than 10
// Example-1:
const firstNumber = 11;
if (firstNumber > 10) {
    console.log("The given number is greater than 10");
}
// If...else:
// Find if the given number is odd or even
const secondNumber = 12;
if (secondNumber % 2 !== 0) {
    console.log("Number is odd");
}
else {
    console.log("Number is even");
}
// If... else if ...else statement
const personName = 'Rachel';
if (personName === 'Sam') {
    console.log("It's Sam");
}
else if (personName === 'Rani') {
    console.log("It's Rani");
}
else {
    console.log("It's neither Sam nor Rani");
}
// Ternary operator:
const Today = 'Tuesday';
const result = Today === 'Saturday' ? 'Day out' : 'Work';
console.log(result);
