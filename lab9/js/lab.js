// index.js - Using jQuery, create buttons to add to the challenge, problems, and results sections of your document
// Author: Michelle Wang
// Date:11/6/2023

// Add toggle class button to challenge
// $("#challenge").append("<button id='lab-toggle-button'>Click Here!<button>");

// // Add a click listener to the toggle Class button
// $("#lab-toggle-button").click(function(){
//     $("#challenge").toggleClass(".special");
//     //result when clicked
//     $("#challenge").html("Congrats! You clicked it!")
// });

//add toggle class button to problem
//$


// ==========================================================================================


// // adding button
// $("#challenge").append("<button id='lab-toggle-button'>CLICK HERE!!<button>");

// // listening 
// $("#lab-toggle-button").click(function(){
//   // append paragraph
//   $("#challenge").append("<p>The challenge of the lab was to experiment with jQuery and make buttons that have an action when clicked.</p>");
// });

// // add toggle button
// $("#problems").append("<button id='problems-toggle-button'>PRESS ME!!<button>");

// // listener for problem
// $("#problems-toggle-button").click(function(){
//     // appends paragraph
//     $("#problems").append(`<p>Some problems that came up was getting the buttons to do something. I managed to get challenge to click and then show a message.
//     For the other buttons I decided to change the color of the section similar to the professor's website "highlight". This proved difficult at
//     first but after looking over the JS and understanding how it works, it was easier. I also decided to try doing a collapsible button for one of my
//     sections and used W3schools to incorporate it into my code.</p>`);
// });

// // result button
// $("#results").append("<button id='results-toggle-button'>Click here to reveal our results!<button>");

// // result listener
// $("#results-toggle-button").click(function(){
//     // appends paragraph
//     $("#results").append("<p>You can see the results if you click the button that says 'Click Here' in the challenge section. I also decided to change the section backgrounds to test out other button functions. </p>");
// });

//TASK X: BONUS
$("#challenge, #problems, #results").addClass("special-sections");

$(".special-sections").append("<button class='toggle-button'>Click Here!</button>");

$(".special-sections button").one('click', function(){
    var sectionId = $(this).parent().attr('id');
    var paragraphText = "";

    if (sectionId === "challenge") {
        paragraphText = "The challenge of the lab was to experiment with jQuery and make buttons that have an action when clicked.";
    } else if (sectionId === "problems") {
        paragraphText = `Some problems that came up was getting the buttons to do something. I managed to get challenge to click and then show a message.
        However, this proved difficult because it would change the whole section to the text "You clicked it!" instead of just the button.
        After looking over the JS with Ashley and understanding how it works, it was easier. I also did some research to make the button only clickable once so
        that we did not see the content multiple times everytime we clicked the button. I decided to highlight the section when it was revealed as well.`;
    } else if (sectionId === "results") {
        paragraphText = "You can see the results if you click the button that says 'Click Here' in the following sections.";
    }

    // appends a new paragraph to the parent section when clicked
    $(this).parent().append("<p>" + paragraphText + "</p>");
});