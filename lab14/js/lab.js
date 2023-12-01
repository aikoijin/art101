/*
   lab.js - Debugging StackOverflow question by adding breakpoints and solving the issue.

   Requirements: jQuery must be loaded for this script to work.

   Author: Ashley Pham
   Date: Nov 25 2023
*/
let jokes = [
  //We filled the array with random jokes since the OP did not disclose the jokes
  "Why did the chicken cross the road?",
  "What falls, but never needs a bandage?",
  "Why did the egg hide?",
  "Why couldn't the sunflower ride its bike?",
  "Why do we tell actors to 'break a leg?'",
  "What do you call a pig that does karate?",
]

let length = jokes.length - 1;
let a = Math.floor(Math.random() * length);
let b = jokes[a];
document.getElementById("jokes-result").innerHTML = "Joke For Today is: " + b + "<br> Joke Number: " + a;