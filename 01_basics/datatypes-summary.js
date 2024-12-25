// #Primitive datatypes
//7 types:   String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLogged = false
const tempval = null
let userEmail;

const id = Symbol('123')
const anotherid = Symbol('123')

console.log(id === anotherid);

const bigNumber = 23243424343424353434n


//reference type datatypes(non primitive)

//Array, Objects,Functions. inka typeof krke dekhenge to "objects" hi aayega. lekin functions ko "function object in documents"

const heroes = ["shaktimaan","iron man","batman"];

let myobj{
    name = "kamal",
    age =22,
}

const myfunction = function(){
    console.log("hello world");
    
}