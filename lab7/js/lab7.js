// index.js - Learn and practice functions in JS
// Author: Michelle Wang
// Date:10/31/2023

// this is an example function and this comment tells what it does and what parameters are passed to it.
function myFunction() {

//ask users for name
var userName = window.prompt("What is your name?");

// sorts the letter of input
var userArray = userName.split('');

//sorts the name
var userArraySort = userArray.sort();

//combines the name
var userArrayJoin = userArraySort.join('');

//return value
return userArrayJoin;

}

//calling function to get name
var userSortedName = myFunction();
//output for names
document.writeln("Your sorted name is: " + userSortedName + "<br>");
