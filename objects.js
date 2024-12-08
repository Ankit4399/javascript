//constructor

const tinderUser = new Object()
//const tinderUser = {}

tinderUser.name = "ankit"
tinderUser.id = "123abc"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const newuser = {
    email : "ankit@google.com",
    fullname: {
        username: {
            regularuser: {
                firstname: "ankit",
                lastname: "yadav"
            }
        }
    }
}
console.log(newuser.fullname.username.regularuser.lastname);

// combining objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = {obj1,obj2,obj3} // give obj1,obj2,obj3 as an element in obj4 like arrays .we never use this

const obj4 = Object.assign({},obj1,obj2,obj3) //{}->target and obj1,obj2,obj3 ->source. ife we dont use braces then target is obj1 and it is modified.
//const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4);


// ***************** array of objects *************************

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 2,
        email: "b@gmail.com"
    },
    {
        id: 3,
        email: "c@gmail.com"
    },
]
// access the objects from array
console.log(users[1].email); // b@gmail.com

/*
To return keys from object => Object.keys(object name);
To return values from object => Object.values(object name);
To check property of object => (Object name).hasOwnProperty(key/value name);
*/
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

