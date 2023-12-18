import *as readlineSync from 'readline-sync';
// For loop:
for (let i = 0; i < 5; i++) {
    console.log(`Loop Iteration ${i}`);
}

// For...in loop:
const numbers: number[] = readlineSync.question("Enter the elements in the array: ").split(' ').map(Number);
for (const index in numbers) {
    console.log(`Element at Index ${index}: ${numbers[index]}`);
}

// For...of loop:
const words: string[] = readlineSync.question("Enter the elements in the array: ").split(' ');
for (let word of words) {
    console.log(`Before Increment: ${word}`);
    word = word.concat("ly");
    console.log(`After Increment: ${word}`);
}
