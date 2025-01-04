//Immediately Invoked Function Expression(IIFE)

(function chai(){
    console.log(`DB connected`);
    
})();


((name) => {
    console.log(`DB connected two${name}`);
    
})("kamal")

//global scope k variable se problem hoti h kayi baar to uske pollution ko htane k liye iife ka use kiya