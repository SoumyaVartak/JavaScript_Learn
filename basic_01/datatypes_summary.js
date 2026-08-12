//primitive data type 
// 7 types are there 
//string , number , boolean , null ,undefined , Symbol ,BigInt 

// dynamic type is js

const id = Symbol('123') // this how symbol is use

const bnum = 7896321565487895214524521452145214562n // this is how big int is declared



// non primitive type or reference type
// Array,objects ,functions 

const heros = ["soumya","prashant","vartak"] // array
let myObj ={ name: "soumya", age:22} // object
 const myFunction =function(){
    console.log("hello World")
 }

 console.log(typeof id);






 /// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

 // Stack(Primitive type is used ) , Heap(Non Primitive is used)
 // Stack creates a copy 
 // Heap creates a original references


 //stack 
 let myname = "soumya"
 let anothername = myname
 console.log(anothername)
 anothername = "varrtak"
  console.log(anothername)
   console.log(myname)

// if any changes in primitive type changes will not happen to both
   // heap
let userOne = {
    email:"usergmail.com",
    upiid:"soumya@hdfc"
}

let userTwo = userOne

userTwo.email = "user2@gmail.com"


console.log(userOne);

// if any changes in non primitive type changes will  happen to both