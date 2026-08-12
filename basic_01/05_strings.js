const name = "Soumya"
const repoCount = 10

console.log(name + repoCount + "Value");
// do not use concatination is such way

// concatination

console.log(`hello name is ${name} and repo ${repoCount}`)

//another way to declare the string is
const gameName = new String('soumya vartak')
console.log(name[0]);
console.log(gameName[6]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("a"));
// STRING SLICEING
const name1="Prashant-vartak"
const newString = name1.substring(0,4);
console.log(newString)
// you can reverse the value with the help of slicing
const newStringg = name1.slice(-8,4)
console.log(newStringg)
// trim
const newStr = "     doa@mdos   "
console.log(newStr)
console.log(newStr.trim())

const url = "https://onownson/noan%20njnsc"
console.log(url.replace('%20','--'))

console.log(name1.includes('vartak'))

// string will convwert into array on the basis of -

console.log(name1.split('-'))

