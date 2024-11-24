// const score = 33
const score = new Number(34);
console.log(score);

console.log(score.toString().length); //convert num to string and we can use string operations on it also.

console.log(score.toFixed(2)); //give value upto 2 decimal places

const otherNumber = 123.8989
console.log(otherNumber.toPrecision(4)); // roundoff number upto given digits

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor (Math.random() * (max-min+1)) + min);                          


