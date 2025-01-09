const user = {
    username: "kamal",
    price: 199,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to the website`);
        // console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "kamal"
//     console.log(this.username); //give undefined.. becaucse this is not definged in the function
    
//     console.log(this);  //print many thing like window,global etc;
    
// }
// chai()
//  const chai = function (){
//         let username = "kamal"
//         console.log(this.username);
        
//         // console.log(this);
        
//     }
//     chai()

    // const chai = () => {
    //     let username = "kamal"
    //     console.log(this.username);
        
    //     // console.log(this);
        
    // }
    // chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// const addTwo = (num1,num2) => (num1 + num2)
// const addTwo = (num1,num2) => num1 + num2// implicit trika h

const addTwo = (num1,num2) => ({username:"kamal"})

console.log(addTwo(3,4));

// const myarr =[2,444,23,45]

// myarr.forEach()