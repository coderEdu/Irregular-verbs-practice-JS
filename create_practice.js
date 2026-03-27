function createPracticeCard() {
    // 1. Create a new paragraph element
    const row = document.createElement('tr');

    // 2. Set the text content of the new element
    // 3. Find an existing parent element
    const element = document.getElementById('verb_table');

    const counterTd = document.createElement('td');
    counterTd.innerHTML = `
        <span id="counter">${++counter}.</span>
    `;

    const sentence = document.createElement('td');
    sentence.innerHTML = `
        <span>Write the past tense of the following irregular verb</span>
    `;

    const selectedVerb = document.createElement('td');
    selectedVerb.textContent = selected_verb;
    selectedVerb.innerHTML = `
        <span id="selected_verb" class="verb-display">${selected_verb}</span>
    `;

    const td4 = document.createElement('td');
    td4.textContent = "";

    row.appendChild(counterTd);
    row.appendChild(sentence);
    row.appendChild(selectedVerb);
    row.appendChild(td4);

    // 4. Append the 'tr' element to the parent (verb_table)
    element.appendChild(row);
}