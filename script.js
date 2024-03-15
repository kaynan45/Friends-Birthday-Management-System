updateTable();

//MODAL [
const addFriendButton = document.getElementById("insert-friends-button");
const closeModal = document.querySelector(".close-modal");

addFriendButton.addEventListener("click", () => {
  document.querySelector(".modal").classList.add("active");
});

function modalClose() {
  document.querySelector(".modal").classList.remove("active");
}

closeModal.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("active");
});
//MODAL ]

//Html synchronous
const friendsList = document.getElementById("tbody");
const nameInput = document.getElementById("js-friend-name");
const birthdayInput = document.getElementById("js-friend-birthday");

function createFriendRow(friends_db) {
  const newRow = document.createElement("tr");
  const newThead = document.createElement("th");
  newRow.innerHTML = `
        <td>${friends_db.name}</td>
        <td>${friends_db.birthday}</td>
        <td class="action-td">
        <button id="delete-button" class="button red">Delete</button>
        <button class="button yellow">Edit</button>
        </td>

`;
  document.querySelector("#js-friends-table>tbody").appendChild(newRow);
}

const isValidFields = () => {
  return document.getElementById("form").reportValidity();
};

function clearTable() {
  const rows = document.querySelectorAll("#js-friends-table>tbody tr");
  rows.forEach((row) => row.parentNode.removeChild(row));
}

function updateTable() {
  const friends_db = readFriends();
  clearTable();
  friends_db.forEach(createFriendRow);
}

updateTable();

const saveFriend = () => {
  if (isValidFields()) {
    const friends_db = readFriends();
    const newFriend = {
      name: nameInput.value,
      birthday: birthdayInput.value,
    };
    createFriend(newFriend);
    console.log(readFriends());
    nameInput.value = "";
    birthdayInput.value = "";
    modalClose();
    updateTable();
  }
};

document.querySelectorAll("#delete-button").forEach((deleteBtn, index) =>
  deleteBtn.addEventListener("click", () => {
    const friend_db = readFriends();
    const response = confirm(
      `Are you sure you want to delete ${friend_db[index].name}`
    );
    if (response) {
      deleteFriend(index);
      updateTable();
    }
  })
);

//LocalStorage functions
function setItem(friend) {
  localStorage.setItem("friends_db", JSON.stringify(friend));
}

function getItem() {
  return JSON.parse(localStorage.getItem("friends_db")) ?? [];
}

const tempFriend = {
  name: "Bernard",
  birthDay: "17/01/2007",
};

//[CREATE-CRUD]
function createFriend(friend) {
  const friends_db = getItem();
  friends_db.push(friend);
  setItem(friends_db);
}

//[READ-CRUD]
function readFriends() {
  return getItem();
}

//[UPDATE-CRUD]
function updateFriends(index, newFriend) {
  const friends_db = readFriends();
  friends_db[index] = newFriend;
  setItem(friends_db);
  console.log(readFriends());
}

//[DELETE-CRUD]
function deleteFriend(index) {
  friends_db = readFriends();
  friends_db.splice(index, 1);
  setItem(friends_db);
  console.log(readFriends());
}

document.getElementById("js-add-friend").addEventListener("click", saveFriend);
