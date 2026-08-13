function saymyname(){
    console.log("soumya")
    console.log("prashant")
    console.log("vartak")
}

saymyname()

// function addtwonumbers(num1,num2){ //parmeters
//   console.log(num1+num2)
// }
// addtwonumbers(1,3) // arguments
// const a =addtwonumbers(1,3)
// // this only prints it will not save value in a 

function addtwonumbers(num1,num2){
    // let result = num1+num2
    // return result
// another way of declaring
return num1+num2
}
const a =addtwonumbers(1,3)
 console.log(a)


function loginUserMessage(username){
    return `${username} logged in `

}
console.log(loginUserMessage("SOUMYA"))