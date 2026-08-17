// for loop 

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if(element == 5){
//         console.log(`this is the best num ${element}`);
        
//     }

//     console.log(element)
// }


// for (let i = 0; i <= 3; i++) {
//     console.log(`outer loop value ${i}`);
    
//     for (let j = 0; j <= 3; j++) {
//         console.log(`inner loop value ${j}`);
        
        
//     }
    
// }

// multipliccation table
// for (let i = 1; i <= 10; i++) {
//     // console.log(`outer loop value ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value ${j}`);
//         console.log(`${i} * ${j} = ${i*j}`);
        
        
//     }
    
// }
// for loop using array
// let myArr =['flash','batman','kgf']
// for (let i = 0; i < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);
    
// }

// break and continue 
// for (let i = 1; i < 10; i++) {
//     if (i == 5){
//         console.log("detected value 5");
//         break
//     }
//     console.log(`volue of i is ${i}`);
// }
for (let i = 1; i < 10; i++) {
    if (i == 5){
        console.log("detected value 5");
        continue
    }
    console.log(`volue of i is ${i}`);
}