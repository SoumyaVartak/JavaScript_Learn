const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","flash","vbatman"]

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes)
// pussh modifies the original array and new array is combined added at last postion

const newher = marvel_heroes.concat(dc_heroes)
console.log(newher)
// in concat each array is added invidually and reates a new array so it needs to be 
// store

// spreads it also combies two array
const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// it will help you to seperate the array
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

console.log(Array.isArray("soumya"))// this will return t or f 
console.log(Array.from("soumya")) // this will convert into array
console.log(Array.from({name: "hitesh"})) 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))