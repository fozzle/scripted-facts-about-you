var ageInput = document.getElementById("ageInput");
ageInput.addEventListener("input", calculateAge);

calculateAge({target: {value: 0}});
function calculateAge(event) {
    age = parseInt(event.target.value, 10) || 0;

    // Constant numbers to help you out
    var heartbeatsPerYear = 42000000;
    var daysPerYear = 365;
    var gallonsPerYear = 52;
    var cerealPerYear = 260;
    var hoursPerWeek = 40;
    var workWeeksPerYear = 49;

    // Calculate our "facts" to fill in
    var heartbeats = age * heartbeatsPerYear;
    var days = age * daysPerYear;
    var gallons = age * gallonsPerYear;
    var cerealBowls = Math.max(0, age - 5) * cerealPerYear;
    var workHours = 49 * 40 * Math.max(0, age - 22);

    // Select our answer elements from the HTML document
    var heartBeatsAnswer = document.getElementById("heartbeatAnswer");
    var daysAnswer = document.getElementById("daysAnswer");
    var waterAnswer = document.getElementById("waterAnswer");
    var cerealAnswer = document.getElementById("cerealAnswer");
    var workAnswer = document.getElementById("workAnswer");

    // Fill in our answers by setting innerHTML
    heartBeatsAnswer.innerHTML = heartbeats;
    daysAnswer.innerHTML = days;
    waterAnswer.innerHTML = gallons;
    cerealAnswer.innerHTML = cerealBowls;
    workAnswer.innerHTML = workHours;
}

