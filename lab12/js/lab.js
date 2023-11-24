// index.js - Using jQuery, make a sorting function to place the user into a house.
// Author: Michelle Wang
// Date:11/24/2023

//sorting hat function
function sortingHat(str){
  var length = str.length
  var mod = length % 4
  //=: set the value ==: compares
  if (mod == 0){
    return "Gryffindor"
  }
  else if (mod == 1){
    return "Ravenclaw"
  }
  else if (mod == 2){
    return "Slytherin"
  }
  else if (mod == 3){
    return "Hufflepuff"
  }
}

//TASK X: Bonus
function readMore(house){
  if (house === "Gryffindor"){
    return "Gryffindor value bravery above all else. This means they’re the people who are often reckless and who dive headfirst into situations without thinking through the consequences — though many Gryffindors view bravery as something else. Perhaps they see it as the bravery of standing up to their friends, or, similarly to Hufflepuffs, demanding justice in an unjust world. Often, they’re charismatic leaders, but that’s mainly based off of the books and not how I would actually view the traits.<br> <i>Credit to Emma Thomas</i>"
  }
  else if (house === "Ravenclaw"){
    return "Ravenclaw value intelligence above all else. They tend to be witty and enjoy learning, but these characteristics aren’t set in stone. They’re the thinkers of the world, the ones who enjoy pondering an issue and debating and often pride themselves on their own wisdom.<br> <i>Credit to Emma Thomas</i>"
  }
  else if (house === "Slytherin"){
    return "Slytherin value ambition above all else. In the books they’re respected as wicked and cruel, but I don’t find this to be the case with real-life Slytherins. Instead, they tend to be resourceful and cunning, determined to achieve their goals over all else. Sometimes, this comes at the cost of other people. But ambition in and of itself isn’t a bad things, and many Slytherins reflect that.<br> <i>Credit to Emma Thomas</i>"
  }
  else if (house === "Hufflepuff"){
    return "A Hufflepuff values loyalty above all else. They have a strong sense of morality and justice, and tend to be patient, hard workers. Their general “do-gooder” tendencies mean that, in canon, they’re the brunt of many jokes, but so many of these people are ones who ensure that the world is fair and working the way it should.<br> <i>Credit to Emma Thomas</i>"
  }
}

// Add a click listener to the button
$("#my-button").click(function(){
    var name = $("#input").val()
    var house = sortingHat(name)
    //result when clicked
    $("#output").html("Congratulations!<br>The Sorting Hat has sorted you into: " + house +"<br><br>")    
    // Creating a retry button
    const retryButton = document.createElement('button');
    retryButton.textContent = "Not your cup of tea? Let's try this again.";
    retryButton.style.display = 'block';
    retryButton.style.margin = '0 auto';
    retryButton.onclick = function(){
        $(retryButton).html("Stop complaining. Your assignment is final.");
    };
    $("#retry").append(retryButton);

    var info = readMore(house);
    $("#output").append(house + ": " + info);
});

//      // Function to handle click event on the dynamically created button
//      function changeButtonText() {
//         $(newButton).html("Stop complaining. Your assignment is final.");
//      }
//    // Set initial text content of dynamically created button and add event listener for clicks 
//    $(newButton).text("Not your cup of tea? Let's try this again.")
//               .on('click',changeButtonText); 
//    // Append newly created dynamic Button 
//    $("#retry").append(newButton);
//   //  $("#output").append("Want to learn more about " + house +"?")
// });


