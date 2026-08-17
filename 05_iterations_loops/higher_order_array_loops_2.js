const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    java:"java"
}

// for in loop

// for (const key in myObject) {
//     console.log(key);
//     console.log(myObject[key]);
// }

arr = ['cpp','java','python','ruby']
for (const key in arr) {
   
    const element = arr[key];
    console.log(element);    
}

const map = new Map()
map.set('IN','India')
map.set('usa','united states')
map.set('fr','france')
map.set('IN','India')
// console.log(map);
// this does not give output because maps are not iterable
// for (const key in map) {
   
    
//     const element = map[key];
    
//     console.log(element);

//     console.log(key) // this does not give a
    
// }