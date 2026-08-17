const num = [1,2,3]

const total = num.reduce((acc,currVal)=>{
    console.log(`accumulator val ${acc},current value: ${currVal}`)
    return acc + currVal

},0)
console.log(total);


const shoppingCart =[
    {
    item_name:'js coarse',
    price:200
},
    {
    item_name:'java coarse',
    price:2000
},
    {
    item_name:'data sciece coarse',
    price:1000
},
]
const priveTopay = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priveTopay);
