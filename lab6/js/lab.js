// index.js - Learn and practice arrays and objects in JS
// Author: Michelle Wang
// Date:10/27/2023

// List of Transportation
var myTransport = ["bus", "walk", "car"];

//My main form of transportation
var myMainRide = {
    make: "Tesla", 
    model: "3", 
    color: "black",  
    year: 2018, 
    age: function() {
        return 2023 - this.year;
    }
}

document.writeln("My modes of transportation are: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
