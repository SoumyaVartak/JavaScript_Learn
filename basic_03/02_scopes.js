// golbal scope
let a = 10
var b = 20
const c = 30
if (true){
   // block scope 
   let a =40
   var b = 50
const c = 60
   console.log(a)
console.log(b)
console.log(c)
}
console.log(a)
console.log(b)
console.log(c)

function one(){
    const username = "soumya"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website) this cannot be execute  it cannot access
    two()
}
one()


/// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// addone(4) this will run 
function addone(num){  // function
    return num +1;

}
// addone(4) this will run
// addTwo(2) this will not run
const addTwo = function(num){ // expression
    return num + 2
}

// addTwo(3) this will run