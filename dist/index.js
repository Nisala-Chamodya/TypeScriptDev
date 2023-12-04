"use strict";
let numbers = [10, 20, 30, 40];
console.log(numbers[0]);
let strings = ["fsda", "fsdaf", "fdsa"];
strings.push("10");
strings.pop();
let student = ["Nisala", 21];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (const temp of numbers) {
    console.log(temp);
}
