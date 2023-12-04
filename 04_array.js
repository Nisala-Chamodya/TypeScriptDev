//arrays
let numbers:number[]=[10,20,30,40];
console.log(numbers[0]);

//================
let strings:Array<string>=["fsda","fsdaf","fdsa"];

strings.push("10");//add
strings.pop();//remove last element

//==tupple=>
let  student:[string,number]=["Nisala",21];
///==iteration=
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}

for (const temp of numbers) {
    console.log(temp);
}