// let a = 10
// var b = 20
// const c = 30
// var b = 22
let a = 300
 if(true){
    let a = 10
    // var b = 20
    // console.log("Inner:", a);
    
    const c = 30 
 }
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "kamal"
    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
    
}

one()

if(true){
    const username = "kamal"
    if(username == "kamal"){
        const website = "youtube"
        // console.log(username+website);
        
    }
    // console.log(website);
    
}
// console.log(username);

//. ******************interesting*****************************
addone(5)
function addone(num){
  return num+1;
}

addtwo(5)

const addtwo = function(num){//also function but also called expression. it is also hold in a variable therefore function call will be later only
    return num+2
}






