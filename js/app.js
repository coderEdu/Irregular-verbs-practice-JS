var verbDisplay = "";
var btn_check;
var verbInput = "";
var imgSuccess;
var counter = 0;
var attemptCount = 1;
var totalAttempts = 3;
var random;
var random_verb;
var spelling;
var success_counter = 0;

// from local storage
let tense = localStorage.getItem('tense'); // "infinitive", "past simple" or "past participle"
let verb_amount = localStorage.getItem('verb_amount');  // 20, 50, 100, all
let inf_tense = localStorage.getItem('inf_tense'); // "past simple" or "past participle"
let repeat_verbs = localStorage.getItem('repeat_verbs') === 'true'; // true or false

// Random function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
// Example: random integer between 1 and 10 (possible results: 1, 2, ..., 9)
// let randomInt = getRandomInt(1, 10);

document.getElementById("verb_total").textContent = verb_amount;
document.getElementById("tense_training").textContent = tense;
document.getElementById("repeat_verbs").textContent = repeat_verbs ? "Yes" : "No";

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
    // console.trace("loadData called");
    counter++;
    random = getRandomInt(0, Verbs.length);

    if (tense === "infinitive") {
        if (inf_tense === "past simple") {
            random_verb = Verbs.at(random).pastSimple;
        } else if (inf_tense === "past participle") {
            random_verb = Verbs.at(random).pastParticiple;
        }
    } else {
        random_verb = Verbs.at(random).infinitive;
    }

    insertPracticeCard();

    const tenseToPractice = convertTenseString(tense);
    wrong = document.getElementById("wrong");
    spelling = Verbs.at(random)[tenseToPractice];
    verbDisplay = document.getElementById("verb_display" + counter);
    btn_check = document.querySelector("button[name='btn_check']");
    verbInput = document.querySelector("input[name='verb']");
    imgSuccess = document.getElementById("img_success" + counter);
    document.getElementById("attempt_count").textContent = attemptCount;
    document.getElementById("total_attempts").textContent = totalAttempts;

    verbInput.setAttribute("placeholder", `Enter the ${tense} tense`);

    if (repeat_verbs === false) {
        Verbs.splice(random, 1); // remove the undefined element from the array to avoid repetition
    }
}

function insertPracticeCard() {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><span id="counter">${counter}.</span></td>
        <td>Write the <span class="tense-highlight">${tense}</span> tense of the following irregular verb</td>
        <td><span id="verb_display${counter}" class="verb-display">${random_verb}</span></td>
        <td class="td_img"><img src="img/Custom-Icon-Design-Flatastic-2-Faq.16.png" alt="" srcset="" id="img_success${counter}"></td>
    `;
    const verbTable = document.getElementById("verb_table");
    verbTable.appendChild(tr);
}

function finalMessage() {
    // The ending practice modal
    let h2 = "";
    let message = "";
    let icon = "";
    if (success_counter == verb_amount) {
        confetti();
        confetti();
        h2 = "Great job!";
        message = "You have completed the practice session with a perfect score.";
        icon = "img/Google-Noto-Emoji-Activities-52727-1st-place-medal.24.png";
    } else {
        h2 = "Good effort!";
        message = "You have completed the practice session, but you can do better! Try again to get a perfect score.";
        icon = "img/Google-Noto-Emoji-Activities-52728-2nd-place-medal.24.png";
    }
    const modal = document.createElement('dialog');
    modal.innerHTML = `
        <div class="final-modal-title">
            <h2>${h2}</h2>
            <img src=${icon} alt="" srcset="">
        </div>
        <h3>${message}</h3>
        <p>Click OK to return to the settings page.</p>
        <div class="final-modal-btn-container">
            <button class="btn-secc" id="close_modal_btn">OK</button>
        </div>
    `;
    document.body.appendChild(modal);
    modal.showModal();
    
    const closeModalBtn = document.getElementById('close_modal_btn');
    closeModalBtn.addEventListener('click', () => {
        modal.close();
        location.href = "index.html";
    });                
}

btn_check.addEventListener("click", function() {
    const userInput = verbInput.value.trim().toLowerCase(); // Get user input and convert to lowercase for case-insensitive comparison

    if (userInput !== "") { 
        if (userInput === spelling) {
            ++success_counter;
            imgSuccess.src = "img/Hopstarter-Sleek-Xp-Basic-Ok.16.png";
            verbInput.value = "";
            attemptCount = 1;
            if (counter <= verb_amount) {
                loadData();
            }
        } else {
            imgSuccess.src = "img/Hopstarter-Sleek-Xp-Basic-Close-2.16.png"; // 'X' icon
            verbInput.value = "";
            if (attemptCount < totalAttempts) {
                attemptCount++;
                document.getElementById("attempt_count").textContent = attemptCount;
            } else {
                attemptCount = 1;
                document.getElementById("attempt_count").textContent = attemptCount;
                showWrongMessage();  
                // if the user fails, the correct answer will be shown and the next verb will be loaded after clicking the 'X' button on the wrong message
            }
        }

        verbInput.focus();
        
        if (counter > verb_amount) {
            finalMessage();
        }
    } 
});

function showWrongMessage() {   // Show the wrong message modal
    wrong.style.display = "flex";
    document.getElementById("spelling").textContent = spelling;
}

// Never declare a variable that references an element 'getElementById' or its listener 'actionListener' inside a function.
// It will cause the variable to be null and the listener won't work or other unwanted behavior may occur.
// Always declare them in the global scope.
const wrongCloseBtn = document.getElementById("wrong_close");
wrongCloseBtn.addEventListener("click", function() {
    if (counter == verb_amount) {
        finalMessage();
    } else if (counter < verb_amount) {
        loadData();
    }
    wrong.style.display = "none";
    verbInput.value = "";
});