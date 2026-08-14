// Immediately invoked function expressions (iife)
function chai(){
    console.log("db conneccted 1");
    
}
chai();

// another way
(function chaii(){
    console.log("db conneccted 2");
    
})();
// another way
(() => {
    console.log("db conneccted 3");
    
})();

((name) => {
    console.log(`db connected ${name}`);
    
})("soumya");