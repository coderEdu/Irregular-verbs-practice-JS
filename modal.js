const openModalBtnDef = document.getElementById('open-modal-btn-def');
const closeModalBtn = document.getElementById('close-modal-btn');
const myModal = document.getElementById('my-modal');

const defContent = document.getElementById('def-content'); // Get the element to display the definition
const defModalTitle = document.getElementById('def-modal-title'); // Get the element for the modal title (optional)

// Open the modal
openModalBtnDef.addEventListener('click', () => {
  myModal.showModal(); // Displays the dialog as a modal
  defContent.textContent = Verbs.at(random).definition; // Set the definition content in the modal
  defModalTitle.textContent = "Definition: " + Verbs.at(random).infinitive; // Set the modal title to the infinitive form (optional)
});

// Close the modal
closeModalBtn.addEventListener('click', () => {
  myModal.close();
});