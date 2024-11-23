
// console.log("2">1)
// console.log("02">1);
// console.log(1<"2");

console.log(null>0); //1
console.log(null==0); //2
console.log(null>=0); //3

//comparisons(> < >= <=) convert null to a number that is 0
//thats why 1 and 2 are false and 3 is correct.

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined <=0); // false





// ===
//triple equal => does strict checking including datatype and value
console.log("2" == 2); //true
console.log("2" === 2); //false
