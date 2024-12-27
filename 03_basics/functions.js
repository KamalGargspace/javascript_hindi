function symyname(){
    console.log("K");
    console.log("a");
    console.log("m");
    console.log("a");
    console.log("l");
    
}

// symyname()
// function addTwonumbers(number1,number2){//parameters
// console.log(number1+number2);

// }
function addTwonumbers(number1,number2){//parameters
    // let result = number1+number2
    // return result;
    return number1+number2
    
    }
const result = addTwonumbers(3,5)//arguments
// console.log("result:", result);

function loginusername(username="sam"){//default value dedi
    if(!username){
        console.log("please enter a username");
        return
        
    }
    return `${username} just logged in`

}

console.log(loginusername("kamal"))
console.log(loginusername())//show undefined