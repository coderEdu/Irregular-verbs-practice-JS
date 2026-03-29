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

// Random function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// Example: random integer between 1 and 10 (possible results: 1, 2, ..., 9)
// let randomInt = getRandomInt(1, 10);

loadData();

function loadData() {
    ++counter;
    random = getRandomInt(0, Verbs.length);
    random_verb = Verbs.at(random).infinitive;

    insertPracticeCard();

    spelling = Verbs.at(random).pastSimple;
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
        <td><span>Write the past tense of the following irregular verb</span></td>
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
    
    if (userInput !== "") {
        if (userInput === spelling) {
            imgSuccess.src = "img/Hopstarter-Sleek-Xp-Basic-Ok.16.png";
            verbInput.value = "";
            loadData();
            verbInput.focus();
        } else {
            imgSuccess.src = "img/Hopstarter-Sleek-Xp-Basic-Close-2.16.png";
            verbInput.value = "";
            verbInput.focus();
        }
    }
});