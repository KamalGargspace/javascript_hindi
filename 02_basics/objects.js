//singleton

//Object literals
// Object.create

const mySym = Symbol("key1")
const Jsuser = {
    name: "kamal",
    age: 20,
    "full_name": "kamalgarg",//ye square brackets hi access ho payega , ye dot se acces nhi ho paayega
   [mySym] :"mykey1" ,// agr sirf mySym krte to vo sirf strings bn jaata
    email:"kamalgarg@gmail.com",
    location: "rohtak",
    isLoggedin: false,
    lastloginday: ["monday","sunday"]
}

console.log(Jsuser.email);
console.log(Jsuser["email"]);
console.log(Jsuser["full_name"]);
console.log(Jsuser[mySym]);

// console.log(Jsuser);

Jsuser.email = "kamal23@gmail.com"

// Object.freeze(Jsuser)//ab values change nhi ho paayegi

Jsuser.email = "gadf@gmail.com"

Jsuser.greeting = function(){
    console.log("hello js user")
}

console.log(Jsuser.greeting());
console.log(Jsuser.greeting);

Jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}

console.log(Jsuser.greetingTwo());




