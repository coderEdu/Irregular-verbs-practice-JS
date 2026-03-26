const verbDisplay = document.getElementById("verb_display");
verbDisplay.style.color = "blue";

const btn_check = document.getElementById("btn_check");
const verbInput = document.getElementById("verb_input");
const imgSuccess = document.getElementById("img_success");
btn_check.addEventListener("click", function() {
    const userInput = verbInput.value.trim().toLowerCase();
    if (userInput !== "") {
        if (userInput === "went") {
            imgSuccess.src = "/home/educoder/projects/Js/IrregularVerbsPractice/img/Hopstarter-Sleek-Xp-Basic-Ok.16.png";
        } else {
            imgSuccess.src = "/home/educoder/projects/Js/IrregularVerbsPractice/img/Hopstarter-Sleek-Xp-Basic-Close-2.16.png";
        }
    }
});