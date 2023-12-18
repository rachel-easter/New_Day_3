"use strict";
// Regular function
function addRegular(a, b) {
    return a + b;
}
// Arrow function equivalent
const addArrow = (a, b) => a + b;
const resultRegular = addRegular(1, 2);
const resultArrow = addArrow(2, 4);
console.log(resultRegular);
console.log(resultArrow);
