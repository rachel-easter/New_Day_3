"use strict";
// Switch case:
// Syntax: switch (condition) { case 1: break; default: break; }
// Example-1:
const availableMoney = 300;
switch (availableMoney) {
    case 1400:
        console.log("No need to pay tax");
        break;
    case 1500:
        console.log("Need to pay tax");
        break;
    case 300:
        console.log("Low balance");
        console.log("Add money to the card");
    case 2:
        console.log("Two cases executed!");
        break;
    default:
        console.log("Out of range");
        break;
}
