// skeleton
/*
Object Literal: Naturally supports Singleton pattern by creating a single instance and providing global access through a closure. It’s a straightforward approach for ensuring only one instance.

Constructor: By default, allows the creation of multiple instances. To implement Singleton behavior with a constructor, additional logic is needed to ensure only one instance is created and managed.

Thus, while object literals inherently create a single instance, constructors require extra steps to achieve the same Singleton behavior
*/


//object literals
const mysym = Symbol("key1")

const obj = {
    name : "ankit",
    "Full Name" : "Ankit Yadav",
    [mysym] : "Mykey1",
    age : 20,
    location : "himachal",
    email : "ankit@google.com",
    isLoggedin :true,
    LastloginDays : ["monday","wednesday"]
}

// console.log(obj.email);
// console.log(obj["email"]);

// console.log(obj["Full Name"]);

// console.log(obj[mysym]); 
// console.log(obj);

obj.email = "hitesh@chatgpt.com"
 //Object.freeze(obj)  //value doesnot change further
obj.email = "hitesh@microsoft.com"
 //console.log(obj);

//  obj.greeting = function(){
//     console.log("hello user");
//  }
//  obj.greetingtwo = function(){
//     console.log(`hello user ${this.name}`); 
//  }
//  obj.greeting();
//  obj.greetingtwo();

obj.greeting = function(){
    return "hello user";
 }
 obj.greetingtwo = function(){
    return `hello user ${this.name}`; 
 }
 console.log(obj.greeting());
 console.log(obj.greetingtwo());
