const accountId=123445
let accountEmail="kamal@gmail.com"
var accountPass = "4567"
let accountState;
//accountId = 5677 //not allowed

accountEmail = "haca@gmail.com"
accountPass = "32453"
accountCity ="bengaluru"
/*
prefer not to use the var because of the scope problem
*/
console.log(accountId);

console.table([accountId,accountEmail,accountPass,accountCity,accountState])