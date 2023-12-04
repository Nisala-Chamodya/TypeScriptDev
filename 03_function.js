//------------------------

function getAfterThreeYear(age:number,name?:string):number {
    if (name){
        console.log(`Hello ${name}`)
    }else {
        console.log(`age is ${age}`);
    }

    return age+3
}
//?--optional parameeter
let myAge:number=getAfterThreeYear(20,"Nisala");

//--------------------------------
const rate:number=1.5;
//const never changed
console.log(rate)