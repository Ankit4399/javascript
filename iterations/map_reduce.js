const myNums = [1,2,3,4,5,6,7,8,9,10]               //filter works on true condition
//const newNums = myNums.map((num)=>num+10)           // map use to do operations in arr
                                                      //we can chain methods also like .map().map().filter()

const newNums = myNums
                .map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>40)
//console.log(newNums); 

// ****************************** reduce *********************************************
const nums = [1,2,3]                                            // intially in first step the initial provided will pass in accumulator
const total = nums.reduce((acc,curval)=>{                       // but after first step result of any operation done in reduce will pass in acc.
    //console.log(`acc is ${acc} and curval is ${curval}`);       // currentvalue will automatically trversing through array.
    return acc+curval
},0)
// const total = num.reduce((accumulator, currentValue) => accumulator + currentValue,initialValue,);
console.log(total);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalprice = shoppingCart.reduce((acc,curval)=>acc+curval.price,0);
console.log(totalprice);

