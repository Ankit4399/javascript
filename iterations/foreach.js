// for each => on arrays / arrays of objects


const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach((val) => {        // foreach loop require a callback function in it.
    // console.log(val);         // callback function doesnt have name.  
});
                                // arrname.foreach( function(item){} )
                                // arrname.foreach( (item)=>{} )


coding.forEach(function(item){
    //console.log(item);
})



//********* passing a function refernce in foreach
function printme(val){
    console.log(val);
}
//coding.forEach(printme)



//using foreeach in arrays of objects to access object element
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
    
})

