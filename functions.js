function sayMyname(){
    // console.log("ankit");
 }
 sayMyname();
 
 function addTwoNumbers(number1,number2){
     return number1 + number2
 }
 console.log(addTwoNumbers(3,4));
 
 function loginuser(username){    //If a function having parameters and in the function call we don't pass any arguments then it's says undefined and Not NULL since, its not defined yet.To avoid the above situation we also can pass a default value in the parameter itself.like(username = "sam")
     if(!username){
         console.log("please enter a name");
         return
     }
     return `${username} has logged in.`
 }
 //console.log(loginuser()); //undefined
 console.log(loginuser("ankit"));
 
 
 //how to take input of unknown no. of parameters(using rest/spread method) 

 function calculateCartPrice(...num){
     return num
 }
 console.log(calculateCartPrice(200,300,400));
 
 //pass object in function
 
 const cart = {
     item : "shoes",
     price : 2000
 }
 function handleobject(anyobject){
     console.log(`${anyobject.item} is the product and price is ${anyobject.price}`);
 }
 //handleobject(cart)
 handleobject({
     item: "pen",
     price: 10
 })
 
 // pass an array in function
 const num = [1,2,3,4]
 function Arrayhandle(anyarray){
     return anyarray[2]
 }
 // console.log(Arrayhandle(num));
 console.log(Arrayhandle([1,2,3,4]));
 