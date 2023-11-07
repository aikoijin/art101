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

var array = [129,41,432,8593,291];
console.log("My array: ", array);

var result = array.map(mySquare);
console.log("Test of squares of array: ", result);

var isEven = array.map(function(x){
    var even = x%2 == 0;
    return even;
})



//output for eveness (true or false)
console.log("Eveness of array: ", isEven);

//bonus task
function main(){
    console.log("Main function started.");
    //using get element ID to print
    document.getElementById("array").innerHTML = "My array: " + array;
    document.getElementById("even").innerHTML = "Is my array even?: " + isEven;
    document.getElementById("squared").innerHTML = "The squared of my array: " + result; 
}

//let's get this party started
window.onload = main;