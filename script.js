const nameInput = document.querySelector(".js-name-field");
const birthInput = document.querySelector(".js-birth-field");
const saveButton = document.querySelector(".js-save-button");
const myForm = document.querySelector(".js-form");

const personData = [];

function printOnConsole() {
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        personData.push({name: nameInput.value, birth: birthInput.value});
        console.log(personData);
    });
};

printOnConsole();