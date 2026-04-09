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

// Open the definition modal
openModalBtnDef.addEventListener('click', () => {
  myDefModal.showModal(); // Displays the dialog as a modal
  // Get the definition based on the selected verb or random verb
  const definition = verb_amount === '1' ? Verbs.find(verb => verb.base === selectedDropdownVerb).definition : Verbs.at(random).definition;
  defContent.textContent = definition; // Set the definition content in the modal
  const verb = verb_amount === '1' ? selectedDropdownVerb : random_verb; // Determine which verb to use for the title
  defModalTitle.textContent = "Definition of: " + verb; // Set the modal title (optional)
});

// Close the definition modal
closeModalBtnDef.addEventListener('click', () => {
  myDefModal.close();
  verbInput.focus();
});

// Open the example modal
openModalBtnEg.addEventListener('click', () => {
    myEgModal.showModal(); // Displays the dialog as a modal
    const example = verb_amount === '1' ? Verbs.find(verb => verb.base === selectedDropdownVerb).example : Verbs.at(random).example;
    egContent.textContent =  example; // Set the example content in the modal
    const verb = verb_amount === '1' ? selectedDropdownVerb : random_verb; // Determine which verb to use for the title
    egModalTitle.textContent = "Example of: " + verb;
});

// Close the example modal
closeModalBtnEg.addEventListener('click', () => {
    myEgModal.close();
    verbInput.focus();
});