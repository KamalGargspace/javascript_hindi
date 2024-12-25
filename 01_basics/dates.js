//Date

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let mycreatedate = new Date(2023,0,23)
// let mycreatedate = new Date(2023,0,23,5,3)

let mycreatedate = new Date("01-14-2023")
// let mycreatedate2 = new Date("14-01-2023")
// console.log(mycreatedate2.toLocaleString());

console.log(mycreatedate.toLocaleString());

let mystamp = Date.now()
console.log(mystamp);
console.log(mycreatedate.getTime());
console.log(Math.floor(Date.now()/1000));  //in sec

let newdate = new Date()
console.log(newdate);
console.log(newdate.getDay());
console.log(newdate.getMonth()+1);

newdate.toLocaleString('default',{
    weekday: "long",
})







// console.log(mycreatedate.toDateString());







