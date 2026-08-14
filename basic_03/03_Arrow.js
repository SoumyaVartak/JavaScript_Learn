const user ={
    username:"soumya",
    price:99,

    wel_msg: function(){
        console.log(`this is the name ${this.username}`); // it refers to current context
        
    } 
}
user.wel_msg()
user.username="prashant" // it changes  the context
user.wel_msg()

// we cannot use this keyword  in function we can only use in object

// function chai(){
//     usern:"ram"
//     console.log(this.usern);
    
// }
// chai()

// in this also we cannot use
// const chai = function (){
//     usern:"ram"
//     console.log(this.usern);
    
// }
// chai()

// const chai =  () => {
//     usern:"ram"
//     console.log(this.usern);
    
// }
// chai()

// arrow function
// basic arrow function
const addTwoValue=(num1,num2) => {
    return num1+num2;

}

console.log(addTwoValue(3,4));
// implicit return
const addTwoValues=(num1,num2) => (num1+num2);

console.log(addTwoValues(3,4));