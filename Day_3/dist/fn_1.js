"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// What is a function:
// Example-1:
// Using type annotation (manual) is good compared to type inference (auto assign)
const readlineSync = __importStar(require("readline-sync"));
function calculator(operation, operand1, operand2) {
    if (operation === "+") {
        console.log(`Addition is ${operand1 + operand2}`);
    }
    else if (operation === "-") {
        console.log(`Subtraction is ${operand1 - operand2}`);
    }
    else if (operation === "*") {
        console.log(`Multiplication is ${operand1 * operand2}`);
    }
    else if (operation === "/") {
        const result = Math.floor(operand1 / operand2);
        console.log(`Division is ${result}`);
    }
}
const userOperation = readlineSync.question('Enter the operation (+, -, *, /): ');
const operandA = parseInt(readlineSync.question('Enter the first operand: '));
const operandB = parseInt(readlineSync.question('Enter the second operand: '));
calculator(userOperation, operandA, operandB);
// Return type:
// Concatenate two strings and return a new string:
function concatenateStrings(str1, str2) {
    return str1.concat(str2);
}
const inputString1 = readlineSync.question('Enter the first string: ');
const inputString2 = readlineSync.question('Enter the second string: ');
const concatenatedResult = concatenateStrings(inputString1, inputString2);
console.log('Concatenated result:', concatenatedResult);
