const myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());  //give current date month year
console.log(myDate.toLocaleDateString());//give mm/dd/yy
console.log(myDate.toLocaleString()); // givce mm/dd/yy and time
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23) // in js,year start with 0 index i.e, 0 means jan
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14") // in this format year index starts with 1.
console.log(myCreatedDate.toLocaleString());

let timestamp = Date.now();
console.log(timestamp);

