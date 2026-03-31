var verbDisplay = "";
var btn_check;
var verbInput = "";
var imgSuccess;
var btn_def;
var btn_eg;
var counter = 0;
var random;
var random_verb;
var spelling;

let tense = localStorage.getItem('tense'); // "past simple" or "past participle"
let verb_amount = localStorage.getItem('verb_amount');  // 20, 50, 100, all

// Random function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// Example: random integer between 1 and 10 (possible results: 1, 2, ..., 9)
// let randomInt = getRandomInt(1, 10);

loadData();

function convertTenseString(tense) {
    if (tense === "past simple") {
        return "pastSimple";
    } else if (tense === "past participle") {
        return "pastParticiple";
    } else {
        return "infinitive";
    }
}

function loadData() {
    console.log(tense);
    console.log(verb_amount);

    ++counter;
    random = getRandomInt(0, Verbs.length);
    random_verb = Verbs.at(random).infinitive;

    insertPracticeCard();

    const tenseToPractice = convertTenseString(tense);
    spelling = Verbs.at(random)[tenseToPractice];
    verbDisplay = document.getElementById("verb_display" + counter);
    btn_check = document.querySelector("button[name='btn_check']");
    verbInput = document.querySelector("input[name='verb']");
    imgSuccess = document.getElementById("img_success" + counter);
    btn_def = document.getElementById("btn_def");
    btn_eg = document.getElementById("btn_eg");
}

document.getElementById("verb_display" + counter).innerHTML = random_verb;

function insertPracticeCard() {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><span id="counter">${counter}.</span></td>
        <td><span>Write the ${tense} tense of the following irregular verb</span></td>
        <td><span id="verb_display${counter}" class="verb-display">${random_verb}</span></td>
        <td class="td_img"><img src="img/Custom-Icon-Design-Flatastic-2-Faq.16.png" alt="" srcset="" id="img_success${counter}"></td>
    `;

    const verbTable = document.getElementById("verb_table");
    verbTable.appendChild(tr);
}

btn_def.addEventListener("click", function() {
    alert(Verbs.at(random).definition);
});

btn_eg.addEventListener("click", function() {
    alert(Verbs.at(random).example);
});

btn_check.addEventListener("click", function() {
    const userInput = verbInput.value.trim().toLowerCase();
    
    //console.log("Counter", counter);
    //console.log("User input:", userInput);
    //console.log("Random index:", random);
    //console.log("Random verb:", random_verb);
    //console.log("Verb Display:", verbDisplay.innerHTML);
    //console.log("Spelling:", spelling);

    if (userInput !== "") {
        if (userInput === spelling) {
            imgSuccess.src = "img/Hopstarter-Sleek-Xp-Basic-Ok.16.png";
            verbInput.value = "";
            if (counter >= verb_amount) {   // Continue checking this condition ...
                alert("You have completed the practice session! Click OK to return to the settings page.");
                location.href = "index.html";
            } else {
                loadData();
                verbInput.focus();
            } 
        } else {
            imgSuccess.src = "img/Hopstarter-Sleek-Xp-Basic-Close-2.16.png";
            verbInput.value = "";
            verbInput.focus();
        }
    }
});