let value = "ankit"
console.log(typeof value);

let valueinNumber = Number(value)
console.log(typeof valueinNumber);
console.log(valueinNumber); //gives output "NaN(not a number)" which is a number

// "33" => 33
// "33abc" => NaN
// true =>1
// false =>0

let isLoggedin = true
let convertNumber = Number(isLoggedin)
console.log(typeof convertNumber);
console.log(convertNumber); // 1


let somenumber= 33
let some = ""
let somee = "ankit"
let bool = Boolean(somenumber)
let bool2= Boolean(some)
let bool3 = Boolean(somee)

console.log(bool); // output is true
console.log(bool2); // false
console.log(bool3); //true

let num = 33
let convertString = String(num)
console.log(convertString);


                                           //postfix and prefix
                                            
let x = 3;
const y = x++; // x is 4; y is 3
let x2 = 3n;
const y2 = x2++; // x2 is 4n; y2 is 3n
//If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
                                           
let a = 3;
const b = ++a; // x is 4; y is 4
let a2 = 3n;
const b2 = ++a2; // x2 is 4n; y2 is 4n
//If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
             

