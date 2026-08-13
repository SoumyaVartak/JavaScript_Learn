// objects can be declared as an literal or as an constructor
// when we create a object using constructor it is called as Singleton

// objeect literal
// objects has key value pair
// Symbol
const mySym = Symbol("key1")
const  Jsuser = {
      name: "soumya",
      "full name":"soumya avrtak",
      [mySym]:"mykey1",
      age:23,
      email: "soumya@gmil,com",
      isLoggedIn:false,
      lastLoginDays: ["Monday","Saturday"]
}
console.log(Jsuser.age)
// console.log(Jsuser."full name") you cannot access 
console.log(Jsuser["full name"])
console.log(Jsuser["age"])
console.log(Jsuser[mySym])

Jsuser.email="chatsou@gmail.com"
console.log(Jsuser.email)
//Object.freeze(Jsuser) // after this no one can change anything
Jsuser.email="sou@gmail.com" // cannot change
console.log(Jsuser.email)

Jsuser.greeting = function(){
    console.log("hello js user")
}

console.log(Jsuser.greeting);
console.log(Jsuser.greeting()); 
Jsuser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(Jsuser.greeting2());