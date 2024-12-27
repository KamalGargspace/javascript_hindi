const marvel_heroes = ["thor","iron man","spiderman"]
const dc_heroes = ["superman","batman","flash"]

// marvel_heroes.push(dc_heroes) //push full array. [ 'thor', 'iron man', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);
// const allheroes = marvel_heroes.concat(dc_heroes);

// console.log(allheroes);

 const all_new_heroes =[... marvel_heroes, ...dc_heroes]

console.log(all_new_heroes);  //spread similar to the concat but concat is somewhat outdated

const another_array=[1,2,3,[4,5,6],7,[7,6,[4,5]]]
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Kamal"));
console.log(Array.from("kamal"));
console.log(Array.from({name: "Kamal"}));// interesting thing

let score1 = 100
let score2= 200
let score3 = 300
console.log(Array.of(score1,score2,score3));







