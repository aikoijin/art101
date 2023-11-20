// index.js - Using jQuery, make a form and take user input and sort it.
// Author: Michelle Wang
// Date:11/17/2023

// Steps: anagram > Title Case > Output
//anagram function
function generateAnagram(inputString) {
  //convert the input string to an array of characters
  const characters = inputString.split('');

  //shuffle the array of characters to create an anagram
  for (let i = characters.length - 1; i > 0;i--) {
    const j = Math.floor(Math.random()* (i+1));
    [characters[i],characters[j]] = [characters[j],characters[i]];
  }

  //join the shuffled characters back into a string and return
  return characters.join ('');

}

  //Title case credit: https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
  String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

//Button Click :))
console.log("Javascript is working!");

$("#my-button").click(function(){
  // console.log("Button clicked!");
  // var name = prompt("What is your name?");

  var name = $("#input").val()

  var anagram = generateAnagram(name).toProperCase();

  console.log("Prompt returned: " + anagram);
  newText = "Hello " + anagram + "!";
  $("#title").html(newText);
})

//TASK X: BONUS Glitch

setTimeout(function(){
  //glitch will appear after timer ends
  window.location.href = 'glitch.html';
}, 15000);