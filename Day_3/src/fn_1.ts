// What is a function:
// Example-1:
// Using type annotation (manual) is good compared to type inference (auto assign)
import * as readlineSync from 'readline-sync';

function calculator(operation: string, operand1: number, operand2: number): void {
    if (operation === "+") {
        console.log(`Addition is ${operand1 + operand2}`);
    } else if (operation === "-") {
        console.log(`Subtraction is ${operand1 - operand2}`);
    } else if (operation === "*") {
        console.log(`Multiplication is ${operand1 * operand2}`);
    } else if (operation === "/") {
        const result: number = Math.floor(operand1 / operand2);
        console.log(`Division is ${result}`);
    }
}

const userOperation: string = readlineSync.question('Enter the operation (+, -, *, /): ');
const operandA: number = parseInt(readlineSync.question('Enter the first operand: '));
const operandB: number = parseInt(readlineSync.question('Enter the second operand: '));
calculator(userOperation, operandA, operandB);

// Return type:
// Concatenate two strings and return a new string:

function concatenateStrings(str1: string, str2: string): string {
    return str1.concat(str2);
}

const inputString1: string = readlineSync.question('Enter the first string: ');
const inputString2: string = readlineSync.question('Enter the second string: ');

const concatenatedResult: string = concatenateStrings(inputString1, inputString2);
console.log('Concatenated result:', concatenatedResult);
