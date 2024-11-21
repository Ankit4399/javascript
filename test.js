const accountId = "12434"
let accountName = "ankit"
let accountEmail = "ayay@google.com"
let accountCity = "delhi"  //never use var because of issue in block scope and functional scope
//we cannot change const 
accountName = "yadav" // bad practice
let accountState;

console.table([accountCity,accountEmail,accountId,accountName,accountState])