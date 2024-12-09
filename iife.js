// Immediately Invoked Function Expressions
// function fast(){
//     console.log("DB connected");
// }
// fast()

// if we wants that this function runs faster and before everyone
(
    function fast(){                      //named iife
        console.log("DB connected");
    }
)();  // ;is required to stop that iife

((name) => {
    console.log(`${name},DB connected`);
    
})("ankit");