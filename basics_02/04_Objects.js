const tinder =  new Object() // singleton object
console.log(tinder)
const tinderr = {} // non singleton object
console.log(tinderr)
// both give samee output
tinder.id="123"
tinder.name="samy"
tinder.isLoggedIn =false
console.log(tinder)
// nested object
const regularuser = {
    email: "souma@gmail.com",
    name:{
        firstName:"soumya",
        lastname:"vartak"

    }
}
console.log(regularuser.name.lastname)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}
// this combines two object 
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3);

// we can also combine with spread
// mostly use spread
const obj4 = {...obj1,...obj2}
console.log(obj4);

// when values comes from data base
const user = [
    {
        id: 1,
        emails: "h@gmail.com"
    }
]
console.log(user[0].emails)

console.log(Object.keys(tinder))
console.log(Object.values(tinder))
console.log(Object.entries(tinder))

console.log(tinder.hasOwnProperty("isLoggedIn"))


const course ={ 
    coarsehindi: " js coarse",
    price: "999",
    courseinstructor: "soumya"
}

const {courseinstructor: c} = course
console.log(c)

// api json 
// in json key are also string and value are also string
// {
//     "name":"soumya",
//     "coarsename": "js coarse",
//     "price": "freee"
// }
// it caan aloso come in array 