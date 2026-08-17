// for of loop
// [{},{},{}]
const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const ste = "hello world"
for (const str of ste) {
    console.log(`each char is ${str}`);
    
}

// Maps maps holds is key pvalue pair

const map = new Map()
map.set('IN','India')
map.set('usa','united states')
map.set('fr','france')
map.set('IN','India')
console.log(map);
// map does not store duplicate elements

for (const key of map) {
    console.log(key);
    
}

// destructing of key and value

for (const [key,value] of map) {
    console.log(key,'  -   ',value);
    
}

const myObject = {
    'game1':'nfs',
    'game2':"gta"
}
// for of on object

// for (const [key,value] of myObject) {
//     console.log(key,'  -   ',value);
// } this will not work because it is not iterable
