const verbDisplay = document.getElementById("verb_display");
const btn_check = document.getElementById("btn_check");
const verbInput = document.getElementById("verb_input");
const imgSuccess = document.getElementById("img_success");
const btn_def = document.getElementById("btn_def");
const btn_eg = document.getElementById("btn_eg");


// Random function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// Example: random integer between 1 and 10 (possible results: 1, 2, ..., 9)
// let randomInt = getRandomInt(1, 10);

var counter = 0;
let random = getRandomInt(0, Verbs.length);
let selected_verb = Verbs.at(random).infinitive;
var spelling = Verbs.at(random).pastSimple;

document.getElementById("verb_display").innerHTML = selected_verb;
document.getElementById("counter").innerHTML = ++counter + ".";

btn_def.addEventListener("click", function() {
    alert(Verbs.at(random).definition);
});

btn_eg.addEventListener("click", function() {
    alert(Verbs.at(random).example);
});

btn_check.addEventListener("click", function() {
    const userInput = verbInput.value.trim().toLowerCase();
    if (userInput !== "") {
        if (userInput === spelling) {
            imgSuccess.src = "img/Hopstarter-Sleek-Xp-Basic-Ok.16.png";
            createPracticeCard();
        } else {
            imgSuccess.src = "img/Hopstarter-Sleek-Xp-Basic-Close-2.16.png";
        }
    }
});