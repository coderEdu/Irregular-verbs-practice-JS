function createPracticeCard() {
    // 1. Create a new paragraph element
    const row = document.createElement('tr');

    // 2. Set the text content of the new element
    // 3. Find an existing parent element
    const element = document.querySelector("tbody");

    const counterTd = document.createElement('td');
    counterTd.innerHTML = `
        <span id="counter">${++counter}.</span>
    `;

    const sentence = document.createElement('td');
    sentence.innerHTML = `
        <span>Write the past tense of the following irregular verb</span>
    `;

    let random = getRandomInt(0, Verbs.length);
    let selected_verb = Verbs.at(random).infinitive;
    const selectedVerb = document.createElement('td');
    selectedVerb.textContent = selected_verb;
    selectedVerb.innerHTML = `
        <span id="selected_verb" class="verb-display">${selected_verb}</span>
    `;

    const definition = document.createElement('td');
    definition.innerHTML = `
        <button class="btn-secc" id="btn_def">Def</button>
    `;

    const example = document.createElement('td');
    example.innerHTML = `
        <button class="btn-secc" id="btn_eg">E.g</button>
    `;

    const inputverb = document.createElement('td');
    inputverb.innerHTML = `
        <input type="text" name="verb" class="verb-input" placeholder="Enter past tense">
    `;

    const btnCheck = document.createElement('td');
    btnCheck.innerHTML = `
        <button class="btn-check" name="btn_check">Check Spelling</button>
    `;

    const img = document.createElement('td');
    img.className = "td_img";
    img.innerHTML = `
        <img src="" alt="" srcset="" id="img_success${counter}">
    `;

    row.appendChild(counterTd);
    row.appendChild(sentence);
    row.appendChild(selectedVerb);
    row.appendChild(definition);
    row.appendChild(example);
    row.appendChild(inputverb);
    row.appendChild(btnCheck);
    row.appendChild(img);

    // 4. Append the 'tr' element to the parent (verb_table)
    element.appendChild(row);

    definition.addEventListener("click", function() {
        alert(Verbs.at(random).definition);
    });

    example.addEventListener("click", function() {
        alert(Verbs.at(random).example);
    });

    const imgId = document.getElementById(`img_success${counter}`);
    const verbInput = inputverb.querySelector("input[name='verb']");

    btnCheck.addEventListener("click", function() {
    const userInput = verbInput.value.trim().toLowerCase();
    if (userInput !== "") {
        if (userInput === spelling) {
            imgId.src = "img/Hopstarter-Sleek-Xp-Basic-Ok.16.png";
            createPracticeCard();
        } else {
            imgId.src = "img/Hopstarter-Sleek-Xp-Basic-Close-2.16.png";
        }
    }
});
}