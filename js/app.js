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
    // console.log(tense);
    // console.log(verb_amount);
    // console.log(inf_tense);
    // console.log(Verbs.length);

    ++counter;
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
    spelling = Verbs.at(random)[tenseToPractice];
    verbDisplay = document.getElementById("verb_display" + counter);
    btn_check = document.querySelector("button[name='btn_check']");
    verbInput = document.querySelector("input[name='verb']");
    imgSuccess = document.getElementById("img_success" + counter);
    document.getElementById("attempt_count").textContent = attemptCount;
    document.getElementById("total_attempts").textContent = totalAttempts;

    verbInput.setAttribute("placeholder", `Enter the ${tense} tense`);
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

btn_check.addEventListener("click", function() {
    const userInput = verbInput.value.trim().toLowerCase();
    if (userInput !== "") {   
        if (userInput === spelling) {
            imgSuccess.src = "img/Hopstarter-Sleek-Xp-Basic-Ok.16.png";
            verbInput.value = "";
            success_counter++;
            attemptCount = 1;
            if (counter >= verb_amount) {
                // The ending practice modal
                if (success_counter === counter) {
                    confetti();
                    confetti();
                }
                const modal = document.createElement('dialog');
                modal.innerHTML = `
                    <div class="final-modal-title">
                        <h2>Great job!</h2>
                        <img src="img/Google-Noto-Emoji-Activities-52727-1st-place-medal.24.png" alt="" srcset="">
                    </div>
                    <h3>You have completed the practice session!</h3>
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
            } else {
                loadData();
                verbInput.focus();
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
                loadData();
            }
            verbInput.focus();
        }
        
    } 
});