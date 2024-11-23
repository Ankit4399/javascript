const name = 'ankit'
const repocount = 10;
console.log(`my name is ${name} and my repo count is ${repocount}`);

const gameName = new String(" ankit-rao"); // another method for string declaration as string is a object.
console.log(gameName[1]);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('k'));
console.log(gameName.trim());
console.log(gameName.replace('rao','ydv'));
console.log(gameName.toUpperCase());
console.log(gameName.length);

const newString = gameName.substring(0,5)
console.log(newString);

const str = gameName.slice(-8,4);
console.log(str);

console.log(gameName.split('-'));
