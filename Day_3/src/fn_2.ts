// Regular function
function addRegular(a: number, b: number): number {
    return a + b;
}

// Arrow function equivalent
const addArrow: (a: number, b: number) => number = (a, b) => a + b;

const resultRegular: number = addRegular(1, 2);
const resultArrow: number = addArrow(2, 4);

console.log(resultRegular);
console.log(resultArrow);
