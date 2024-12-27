// const tinderUser = new Object();//singleton
const tinderUser = {}//non singleton

tinderUser.id = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedin = true

// console.log(tinderUser);

const regularuser = {
    email: "some@gmail.com",
    full_name: {
        userfullname: {
            firstname: "kamal",
            lastname: "garg"
        }
    }
}

// console.log(regularuser.full_name);
// console.log(regularuser.full_name.userfullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj4 = {5:"r", 6:"h"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)//stored in obj1 

const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3);

const users = [
    {
        id: 1,
        email:"gargj23@gmail.com"
    },
    {
        id: 1,
        email:"gargj23@gmail.com"
    },
    {
        id: 1,
        email:"gargj23@gmail.com"
    },
]

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedin'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "kamal"

}

//course.couresInstructor

const {courseInstructor: instructor} = course//destructuring kr gya h
//console.log(courseInstructor)
console.log(instructor);

// {
//     "name": "kamal",
//     "coursename": "js in english",
//     "price": "free"

// }












