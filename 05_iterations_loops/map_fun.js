const Mynums = [1,2,3,4,5,6,7,8,9,10]

// const nums =Mynums.map((num)=>num+10)
// console.log(nums);
// chaining methods

const newNums = Mynums  
                .map((num) => num*10)
                .map((num) => num +1 )
                .filter((num)=> num>=40)

console.log(newNums);
