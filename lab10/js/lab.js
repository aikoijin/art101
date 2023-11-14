// index.js - Using jQuery, appends new elements to an output div
// Author: Michelle Wang
// Date:11/13/2023

function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 200;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

const sentences = [
  "I don't understand what you're saying...",
  "What???",
  "I'm confused...",
  "Is there a translator nearby?",
  "Huh?"
];

function randReply() {
  const index = Math.floor(Math.random() * sentences.length);
  return sentences[index];
}

let isLeft = true;

$("#make-convo").click(function(){
  const newText = generateRandomText();
  const newReply = randReply();
  if (isLeft) {
    $("#output").append('<div class="text-left"><p>' + newText + '</p></div>');
  } else {
    $("#output").append('<div class="text-right"><p>' + newReply + '</p></div>');
  }
  isLeft = !isLeft;
});
