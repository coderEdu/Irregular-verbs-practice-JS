const infinitiveRadio = document.getElementById('base');
const pastSimpleRadio = document.getElementById('past_simple');
const pastParticipleRadio = document.getElementById('past_participle');
const infBlock = document.querySelector('.if-infin-container');

// Get references to the elements
const radioContainer = document.getElementById('radioContainer');

// Add a 'change' event listener to the container (event delegation)
radioContainer.addEventListener('change', (event) => {
    // Check the value of the selected radio button
    if (event.target.value === 'base') {
        // Show the element
        infBlock.style.display = 'block'; // Or 'inline', 'flex', etc.
    } else {
        // Hide the element
        infBlock.style.display = 'none';
    }
});
