const user = {
    username : "ankit",
    age : 99,

    WelcomeMessage : function(){
        console.log(`${this.username}, welcome to the website`);     // this refers to current context/value   
    }
}
user.WelcomeMessage() //ankit,welcome to the website
user.username = "sam"
user.WelcomeMessage()//sam,welcome to the website

console.log(this) //{}  when it is run in node environment it gives empty braces ,but in browser console it give window.

/*
function chai(){
    let username = "ankit"
    console.log(this.username);     
}
chai() //undefined -> 'this' keyword doesn't work in function ,it only works in object
*/

//+++++++++++++++++++   arrow function   +++++++++++++++++++++++++++

const one = ()=>{
    username = "ankit"
    age = 99
}
//const addtwo = (num1,num2) => num1+num2

//const addtwo = (num1,num2) => (num1+num2)

const addtwo = (num1,num2) => ({username:"sam"})
console.log(addtwo(2,3));
