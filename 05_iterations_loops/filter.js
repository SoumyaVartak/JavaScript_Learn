const coding = ['js','ruby','javs','pp','cpp']
coding.forEach((item) => {
    console.log(item);
    
});


const Mynums = [1,2,3,4,5,6,7,8,9,10]
const newNums=Mynums.filter((num) => num>4 )
// const newNums=Mynums.filter((num) => {
//     return num>4
// } ) when used { } we need to use return keyword
console.log(newNums)

const newNumss = []
Mynums.forEach((num) => {
    if (num > 4){
        newNumss.push(num)
    }
})
console.log(newNumss);
