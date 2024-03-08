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

const personData = [];

function printOnConsole() {
  myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    personData.push({ name: nameInput.value, birth: birthInput.value });
    console.log(personData);
    nameInput.value = "";
    birthInput.value = "";
  });
}

printOnConsole();
