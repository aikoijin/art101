// index.js - Learn and practice anonymous functions and callbacks in JS
// Author: Michelle Wang
// Date:11/3/2023

// this is an example function and this comment tells what it does and what parameters are passed to it.
function mySquare(x){
    var results = x * x;
    return results;
}

//test function
console.log("The square of 10 is: ", mySquare(10));
console.log("The square of 124 is: ", mySquare(124));

array = [129,41,432,8593,291]
console.log("My array: ", array);

var result = array.map(mySquare);
console.log("Test of squares of array: ", result);

var result = array.map(function(x){
    var results = x%2 == 0;
    return results;
})

//output for eveness (true or false)
console.log("Eveness of array: ", result);