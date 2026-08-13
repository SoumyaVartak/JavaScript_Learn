const score = 400
const balance = new Number(100) // by using this it will spefically define it will define as number
console.log(balance)
console.log(balance.toString()) // this will convert it to string
console.log(score)
console.log(balance.toFixed(1))// this will show after decimal numbers
const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3))
const otherNumbers = 231.8966
console.log(otherNumbers.toPrecision(3))
const otherNumberss = 1.8966
console.log(otherNumberss.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));// this is give commas to the number 
                                            // by default american currently set to indian
// +++++++++++++++++++ maths +++++++++++++++++++++

// maths is a by default liabarary

console.log(Math);
console.log(Math.abs(-4));// it converts neagtive value into possitve
console.log(Math.round(4.6)) // it helps you to select round 
console.log(Math.ceil(4.4))// it will round off to upper value
console.log(Math.floor(4.9))// it will round off to lower value
console.log(Math.min(2,4,5,1));
console.log(Math.max(10,24,7,99));

console.log(Math.random()); // it can give any value from 0.0001 to 1
console.log((Math.random()*10) + 1); 
console.log(Math.floor(Math.random()*10) + 1);
// formula
const min = 20
const max = 30

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
