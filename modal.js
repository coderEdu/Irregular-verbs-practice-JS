// for the definition modal
const openModalBtnDef = document.getElementById('open_modal_btn_def');
const closeModalBtnDef = document.getElementById('close_modal_btn_def');
const myDefModal = document.getElementById('my_def_modal');

// for the example modal
const openModalBtnEg = document.getElementById('open_modal_btn_eg');
const closeModalBtnEg = document.getElementById('close_modal_btn_eg');
const myEgModal = document.getElementById('my_eg_modal');

const defContent = document.getElementById('def_content'); // Get the element to display the definition
const defModalTitle = document.getElementById('def_modal_title'); // Get the element for the modal title (optional)
const egContent = document.getElementById('eg_content'); // Get the element to display the example
const egModalTitle = document.getElementById('eg_modal_title'); // Get the element for the example modal title (optional)

// Open the modal
openModalBtnDef.addEventListener('click', () => {
  myDefModal.showModal(); // Displays the dialog as a modal
  defContent.textContent = Verbs.at(random).definition; // Set the definition content in the modal
  defModalTitle.textContent = "Definition of: " + Verbs.at(random).infinitive; // Set the modal title to the infinitive form (optional)
});

// Close the modal
closeModalBtnDef.addEventListener('click', () => {
  myDefModal.close();
});

// Open the example modal
openModalBtnEg.addEventListener('click', () => {
    myEgModal.showModal(); // Displays the dialog as a modal
    egContent.textContent = Verbs.at(random).example; // Set the example content in the modal
    egModalTitle.textContent = "Example of: " + Verbs.at(random).infinitive; // Set the modal title to the infinitive form (optional)
});

// Close the example modal
closeModalBtnEg.addEventListener('click', () => {
    myEgModal.close();
});