// for in loop
const myobj = {
    js: "javascript",
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by apple"
}

for (const key in myobj) {
    // console.log(`${key} shortcut is for ${myobj[key]}`);
    
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);  //map is not iterable so it will not work
// }