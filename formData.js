const form = document.getElementById('settings_form');

var tense = "";
var verb_amount = 0;

function getSettings() {
    tense = document.querySelector('input[name="tense"]:checked').value;
    verb_amount = document.getElementById("verb_amount").value;
    console.log(tense);
    console.log(verb_amount);

    location.href = "practice.html";
}