// for in => works in object and arr but not in map

const myObject = {
    javascript : "js",
    python : "py",
    ruby : "rb" 
}

for (const key in myObject) {
    //console.log(myObject[key]);
    //console.log(`${key} is shortcut for ${myObject[key]}`);
    
}

const languages = ["cpp","java","js","python"]
for (const key in languages) {
    console.log(languages[key]);
}

// const map = new Map() 
// map.set('In',"india")
// map.set('RA',"russia")
// map.set('Fr',"france")
// for (const key in map) {
//     console.log(map[key]); //no output
    
// }