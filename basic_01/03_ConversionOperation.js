let score=null;
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

console.log(valueInNumber);// it will return Nan if it conatains any characters,underdefined
                           // it will return 0 if it contains null
                           // booleans value will return true = 1 , false = 0


let isLoggedIn = "";
let bolleanIsLoggedIn = Boolean(isLoggedIn)
console.log(bolleanIsLoggedIn)
// 1 = true , 0 = false 
// "" = false
// "soumya" = true

let someNumber = 33
let strnum = String(someNumber)
console.log(strnum)
console.log(typeof strnum)


//operations

let value = 3
let negValue = -value

console.log(negValue)


let str1 = "hello"
let str2 = "hitesh"
let str3 = str1 + str2 
console.log(str3)

console.log("1" + 2)//12
console.log("1" + 2+2)//122
console.log(1 + 2+ "2");//32
console.log(true);


let gameCounter = 100
gameCounter++; // postfix 
++gameCounter// prefix 
console.log(gameCounter)