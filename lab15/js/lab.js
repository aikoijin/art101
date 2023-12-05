/*
   lab.js - Using AJAX to grab info from external sources and implement them into our page

   Requirements: jQuery must be loaded for this script to work.

   Author: Michelle Wang
   Date: December 3rd, 2023
*/

// //Choose Your Pokemon!
document.getElementById('activate').addEventListener('click', function() {
  var randomPokemon = Math.floor(Math.random() * 898) + 1;
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
  .then(response => response.json())
  .then(data => {
      document.getElementById('output2').innerHTML = `
      <h3>${data.name}</h3>
      <p>${data.types[0].type.name}</p>
      <p><img src="${data.sprites.front_default}" alt="${data.name}"></p>`;
  })
  .catch(error => console.log(error));
}) 

document.getElementById('pokeball').addEventListener('click', function() {
  document.getElementById('activate').click();
});