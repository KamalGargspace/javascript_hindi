const name = "kamal"
const repocount = 30
// console.log(name + repocount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

const gamename = new String('kamal garg');
console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);

console.log(gamename.toUpperCase());

console.log(gamename.charAt(2));
console.log(gamename.indexOf('m'));


const subname = gamename.substring(0,5);
console.log(subname);

const anothernewname = gamename.slice(-8,4);
console.log(anothernewname);

const newStringone = "  kamal.  "


console.log(newStringone);
console.log(newStringone.trim());

const url = "https://musical-orbit%20-qpj6ww544pjh6pj.github.dev/"
console.log(url.replace('%20','7889'));
console.log(url.includes('sundar'));

console.log(gamename.split(' '));








