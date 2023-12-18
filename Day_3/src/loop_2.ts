// While loop:
// Entry-level condition check loop
// Executes until the condition becomes false
let rollNumber: number = 1;
while (rollNumber <= 10) {
    console.log(`Selected number: ${rollNumber}`);
    rollNumber++;
}

// Do...while loop:
// Exit-level loop
// The loop will be executed at least once
console.log("DO...WHILE LOOP");
let evenNumber: number = 2;

do {
    console.log(evenNumber);
} while (evenNumber % 2 !== 0);

// Counter loop with break statement:
let counter: number = 0;

while (true) {
    console.log(`Current counter value: ${counter}`);

    // Increment the counter
    counter++;

    // Check if the counter reaches a certain value
    if (counter === 5) {
        console.log('Breaking out of the loop prematurely.');
        break; // This will exit the loop immediately
    }
}
