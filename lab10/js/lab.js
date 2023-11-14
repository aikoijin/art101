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
  "SMS SERVICE ERROR 305: Message delivery failed. Further messages will be deducted from your account’s balance.",
  "Msg 2110: The customer you are trying to text is temporarily out of service.",
  "Service Error 409: The subscriber you are trying to reach has blocked all incoming text messages from this number.",
  "Error: Your SMS has not been delivered: The recipient has blocked you. Please, try again after 24 hours.",
  "Error 65487 346: Your message failed to send to this recipient. Please try again later or visit www.stoptextingme.com.",
  "Free Msg. Service: Unable to send the message. The recipient has activated message blocking."
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
  $("#output").append('<div style="clear: both;"></div>');
  isLeft = !isLeft;
});
