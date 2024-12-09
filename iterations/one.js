// for of

//[" ","",""]
//[{},{},{}]

const arr = [1,2,3,4]
for (const num of arr) {
    console.log(`values in arr is ${num}`); 
}

const greeting = "hello user"
for (const greet of greeting) {
    console.log(greet);
}

// MAP

const map = new Map() //initialising map
map.set('In',"india")
map.set('RA',"russia")
map.set('Fr',"france")

//console.log(map);

for (const [key,value] of map) {
    console.log(key, ":-",value);  
}

