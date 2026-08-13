// array
const myArray =[0,1,2,5] // it can have any type of element
const myhero = ["iron man ","super man","Batman"]
// another way of creating the array

const sau = new Array(1,2,4,6)
// we can add more data to it
// it can have nested array
// it has indexing starts from zero
// when we use copy operaton it makes shallow copies
// it shares a same reference point

console.log(myArray[1]);
console.log(myArray.length)// this wil give length

myArray.push(6); // this will add the element
console.log(myArray)
myArray.pop() // this will remove the last element
console.log(myArray)

myArray.unshift(2) // this will insert at first this will shift all the chara this will give load to the computer
console.log(myArray)

myArray.shift()// THIS WILL REMOVE THE FIRST 
console.log(myArray)

console.log(myArray.includes(4))// this will return t or f
console.log(myArray.indexOf(9))// this will return -1 because it does not exist


const newArr = myArray.join() // THIS COPY ALL THE ARRAY ELEMENTS TO THE STRING
console.log(newArr)

// slice , splice

console.log("A ", myArray)
const myn1 = myArray.slice(1,3)  // it gives element last limit is excluded
console.log(myn1)
console.log("B ",myArray)

const myn2 = myArray.splice(1,3)  // it gives element and modifies the original string
// so (1,2,3,4) splice will reove 2,3,4 and only one element will be there in slice
console.log(myn2)
console.log("c ",myArray)

