const marvel_heroes = ["thor","CA","ironman"]
const dc_heroes = ["flash","batman","superman"]

// console.log(marvel_heroes.push(dc_heroes)); // not correct because push is used to add a element thats why 2nd array add as an element to first array.


//**************** adding two arrays ***************

const all_heroes = marvel_heroes.concat(dc_heroes) //concat returns a new array by combining both
console.log(all_heroes);
  
// spread method 
const all_heroes1 = [...marvel_heroes,...dc_heroes]
console.log(all_heroes1);

const myArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const newArr = myArr.flat(Infinity)  // remove all inner brackets
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("ankit")); // check whether given thing is array or not //
console.log(Array.from("ankit")); // make array from given thing
let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3)); // make array [100,200,300]


console.log(Array.from({name: "hitesh"})) // interesting  //output = []