var verbDisplay;
var btn_check;
var verbInput;
var imgSuccess;
var btn_def;
var btn_eg;
var counter = 0;
var random;
var selected_verb;
var spelling;

// Random function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// Example: random integer between 1 and 10 (possible results: 1, 2, ..., 9)
// let randomInt = getRandomInt(1, 10);

insertPracticeCard();
loadData();

function loadData() {
    random = getRandomInt(0, Verbs.length);
    selected_verb = Verbs.at(random).infinitive;
    spelling = Verbs.at(random).pastSimple;
    verbDisplay = document.getElementById("verb_display");
    btn_check = document.querySelector("button[name='btn_check']");
    verbInput = document.querySelector("input[name='verb']");
    imgSuccess = document.getElementById("img_success" + counter);
    btn_def = document.getElementById("btn_def");
    btn_eg = document.getElementById("btn_eg");
    ++counter;
}

function insertPracticeCard() {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><span id="counter">${counter}.</span></td>
        <td><span>Write the past tense of the following irregular verb</span></td>
        <td><span id="verb_display" class="verb-display">${selected_verb}</span></td>
        <td><button class="btn-secc" id="btn_def">Def</button></td>
        <td><button class="btn-secc" id="btn_eg">E.g</button></td>
        <td class="td_img"><img src="" alt="" srcset="" id="img_success${counter}"></td>
    `;

    const verbTable = document.getElementById("verb_table");
    verbTable.appendChild(tr);
}

document.getElementById("verb_display").innerHTML = selected_verb;
document.getElementById("counter").innerHTML = counter + ".";

btn_def.addEventListener("click", function() {
    alert(Verbs.at(random).definition);
});

btn_eg.addEventListener("click", function() {
    alert(Verbs.at(random).example);
});

btn_check.addEventListener("click", function() {
    const userInput = verbInput.value.trim().toLowerCase();
    console.log("Counter", counter);
    console.log("User input:", userInput);
    console.log("Spelling:", spelling);
    if (userInput !== "") {
        if (userInput === spelling) {
            imgSuccess.src = "img/Hopstarter-Sleek-Xp-Basic-Ok.16.png";
            verbInput.value = "";
            insertPracticeCard();
            loadData();
        } else {
            imgSuccess.src = "img/Hopstarter-Sleek-Xp-Basic-Close-2.16.png";
        }
    }
});