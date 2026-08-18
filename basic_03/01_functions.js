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

function calculateCartPrice(...num1){ // rest operator
    return num1
}
console.log(calculateCartPrice(200,300,500))


function calculateCartPrices(val1,val2,...num2){ // rest operator
    return num2
}
console.log(calculateCartPrices(200,300,500,567))  // val1 has 200, val2 has 300 other value
// are stored on num2

const user = {
    user:"soumya",
    price: 199
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.user} and price is ${anyobject.price}`);
}
//    handleObject(user)
// another way of handaling the object
handleObject({
    user:"sam",
    price:1000
})
// lets pass aray
const myneewArray = [200,400,600,100]
function returnSecondValue(getarray){
    return  getarray[1]
}
console.log(returnSecondValue(myneewArray))

