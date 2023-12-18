// The break statement is used to terminate a loop or switch:
const maxCount: number = 5;

let evenCount: number = 1;

for (let iterator = 0; iterator <= 10; iterator++) {
    if (iterator % 2 === 0) {
        console.log(iterator);
        ++evenCount;
    }
    if (iterator === maxCount) {
        break;
    }
}

console.log(`If the count reaches ${evenCount}, the break statement is working.`);
