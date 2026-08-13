// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleTimeString())
console.log(myDate.toISOString())
console.log(typeof myDate) // object

// to declare  a specific date

let myDatecustom = new Date(2023,0,23) // month starts from zero in js (yyyy,mm,dd,hh,min)
console.log(myDatecustom.toDateString());

let myCurrent = new Date("2023-01-02") // in this month starts from 01
console.log(myCurrent.toLocaleString())
// timestamp

let myTimeStamp = Date.now();
console.log(myTimeStamp) // THIS WILL RETURN MILI SECOND
console.log(myCurrent.getTime()) // THIS WILL ALSO RETURN THE MILI SECOND

console.log(Math.floor(Date.now()/1000)) // this will convert into secound

let newDate = new Date()
console.log(newDate.getMonth() + 1) // it starts from zero


console.log(newDate.toLocaleString('default',{
    weekday: "long",
    

}))
