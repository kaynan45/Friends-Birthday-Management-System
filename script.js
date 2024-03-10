//This const is simply the first call of the stored data, if "personData" has a value in it, it'll be displayed, otherwise an empty array will be its value.
const storedData = JSON.parse(localStorage.getItem("personData")) || [];

const tableBody = document.querySelector(".data-table-body");

//Call the function that shows the html on the page
showOnHtml();

// Function to create a table row for a person's data
function createTableRow(person) {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const birthCell = document.createElement("td");

  nameCell.textContent = person.name;
  birthCell.textContent = person.birth;

  row.appendChild(nameCell);
  row.appendChild(birthCell);

  tableBody.appendChild(row);

  return row;
}

//Shows the html, or the tables on the page by calling the function createTableRow(person), with the person parameter, that is nothing more than each data saved on the local storage.
function showOnHtml() {
  storedData.forEach((person) => {
    createTableRow(person);
  });
}

// Function to update and store data in local storage.
function updateLocalStorage() {
  // Push the current input values for name and birthDate into the stored data array.
  storedData.push({ name: nameInput.value, birth: birthInput.value });

  // Update local storage with the modified data array.
  localStorage.setItem("personData", JSON.stringify(storedData));
}

const nameInput = document.querySelector(".js-name-field");
const birthInput = document.querySelector(".js-birth-field");
const saveButton = document.querySelector(".js-save-button");
const myForm = document.querySelector(".js-form");
/*
 *This /\d/ is a regular expression that checks if the input contains any digit (number).
 *The .test() method returns a Boolean value that indicates whether or not a pattern exists in a searched string.
 *In this case, if the string contains a number, it'll be true, otherwise, false.
 */
nameInput.addEventListener("input", () => {
  if (nameInput.value.trim().length === 0) {
    nameInput.setCustomValidity("E o nome queridao?");
  } else if (/\d/.test(nameInput.value)) {
    nameInput.setCustomValidity(
      "Meu querido, colocar o nome usando números? Deixa isso pros joguinhos"
    );
  } else {
    nameInput.setCustomValidity("");
  }
});

//CRUD [CREATE]
//Nothing more than the create part of the CRUD, this function is responsible for both, update the local storage with the provided data in the inputs, and create a new table row
function updateData() {
  //Listen when a submit event happens in the form.
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    //Updates the local storage by calling this function
    updateLocalStorage();
    //Creates a const called name, that saves the nameInput and birthInput
    const person = { name: nameInput.value, birth: birthInput.value };
    //Calls the createTableRow(person) function with the const person inside it
    createTableRow(person);
    nameInput.value = "";
    birthInput.value = "";
  });
  console.log(storedData);
}

updateData();
