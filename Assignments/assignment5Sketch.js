let form, textInput, imageInput, container;
let entries = [];

function setup() {
  noCanvas();

  //Grab form elements by their IDs using `select()`
  form = select('#journal-form');
  textInput = select('#journal-text');
  imageInput = select('#journal-image');
  container = select('#entries-container');

  //Load previously saved journal entries from localStorage
  //https://www.w3schools.com/jsref/prop_win_localstorage.asp
  entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
  entries.forEach((entry, i) => addEntryToDOM(entry, i));

  //When the form is submitted
  form.elt.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page refresh

    const text = textInput.value().trim(); //get text input
    const file = imageInput.elt.files[0];  //get file (if any)

    if (!text) return; //don't proceed if text is empty

    //if user uploaded an image
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const newEntry = {
          text,
          image: e.target.result, //store image as base64 string
          date: new Date().toISOString()
        };
        saveEntry(newEntry);
        addEntryToDOM(newEntry, entries.length - 1);
      };
      reader.readAsDataURL(file); // convert file to base64
      // https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
    } else {
      // No image uploaded
      const newEntry = {
        text,
        image: null,
        date: new Date().toISOString()
      };
      saveEntry(newEntry);
      addEntryToDOM(newEntry, entries.length - 1);
    }

    form.elt.reset(); //clear form after submission
  });
}

//Save new entry to localStorage
function saveEntry(entry) {
  entries.push(entry);
  // Convert JS object to JSON string to store
  // https://www.w3schools.com/js/js_json_stringify.asp
  localStorage.setItem("journalEntries", JSON.stringify(entries));
}

//Create a journal entry card and add it to the page
function addEntryToDOM(entry, index) {
  const div = createDiv().addClass('entry');
  const date = new Date(entry.date).toLocaleString();

  // Insert HTML content into the entry box
  div.html(`
    <button class="delete-entry" data-index="${index}">✕</button>
    <p><strong>${date}</strong></p>
    <p>${entry.text}</p>
    ${entry.image ? `<img src="${entry.image}" alt="Attached Image">` : ""}
  `);

  container.elt.prepend(div.elt); //add to top of entry list

  //Set up delete button
  div.elt.querySelector(".delete-entry").addEventListener("click", () => {
    entries.splice(index, 1); //remove entry from array
    localStorage.setItem("journalEntries", JSON.stringify(entries)); // update storage
    container.html(''); //clear and re-render entries
    entries.forEach((entry, i) => addEntryToDOM(entry, i));
  });
}
