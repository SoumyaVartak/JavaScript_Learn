const userEmail = "h@manl.com"
if (userEmail) {
    console.log("got mail");
    
} else {
    console.log("not got mail");
    
}

// falsy value
// false, 0,-0,BigInt 0n,"", null ,undefined,NaN

// TRUTHY VALUE
// "ONERN", "0","FALSE", " ",[],{},FUNCTION(){}

// Nullish Coalescing Operator (??): null undefined

let val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = undefined ?? 12
console.log(val1);
console.log(val2);
console.log(val3);

// Terniary Operator

// condition ? true : false
const iceTeaprice = 100
iceTeaprice > 50 ? console.log("high price"): console.log("low price");


