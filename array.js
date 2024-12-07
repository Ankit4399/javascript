const numbers = new Array(1,2,3,4);
const num = [1,2,3,4,5]
// console.log(num[2]);
// num.push(9)
// console.log(num);
// num.pop()
// console.log(num);

/*
num.unshift(0)  // add element at the start of array
console.log(num);
num.shift()  // remove first element of array
console.log(num);

console.log(num.includes(4));
console.log(num.indexOf(3));

const myArr = num.join() //convert into string
console.log(myArr);
*/
console.log("A",num);
console.log(num.slice(1,3)); //give new array in which 3rd index is not included and doesn't change the original array.
console.log("B",num);

console.log("C",num);
console.log(num.splice(1,3)); // give array in which 3rd index is included and original array is changed(1st to 3rd index elements are deleted from original array).
console.log("D",num);



/*
SUMMARRY:

1. Array is written in brackets [  ].
2.Array data type is an object.
3.Array can contain different data types . i.e string,number,boolean,array etc.
4. Array is zero based indexing. It starts with zero.
5. Once changed its original value will also change beacause it is non primitive (refrence) type.

ARRAY METHODs :

1.Push = adds value to last of an array.
2. Pop = removes last value of an array.
3. Unshift = adds value at first of an array.
4.Shift = removes first value of an array.
5. Includes = checks true or false.
6. IndexOf = checks the position of value in number form.
7.Join = converts to string.
8. Slice(value to remove from,value remove upto but don't include)= returns new array and original value remains unchanged. Use when you need to extract a portion of an array without modifying it.
9. Splice(value to delete from, number of value to delete) = returns new array with deleted one and original value changed.Use when you need to add, remove, or replace elements within an array.
*/
