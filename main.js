// Ask user for their age
var age = prompt("What is your age?");

// prompt() returns a String, we need to change it into a Number so we can do math!
age = parseInt(age, 10);

// Constant numbers to help you out
var heartbeatsPerYear = 42000000;
var daysPerYear = 365;
var gallonsPerYear = 52;

// Calculate our "facts" to fill in
var heartbeats = age * heartbeatsPerYear;
var days = age * daysPerYear;
var gallons = age * gallonsPerYear;

// Select our answer elements from the HTML document
var heartBeatsAnswer = document.getElementById("heartbeatAnswer");
var daysAnswer = document.getElementById("daysAnswer");
var waterAnswer = document.getElementById("waterAnswer");

// Fill in our answers by setting innerHTML
heartBeatsAnswer.innerHTML = heartbeats + " heartbeats";
daysAnswer.innerHTML = days + " days";
waterAnswer.innerHTML = gallons + " gallons";
