//MODAL [
const addFriendButton = document.getElementById("insert-friends-button");
const closeModal = document.querySelector(".close-modal");

addFriendButton.addEventListener("click", () => {
  document.querySelector(".modal").classList.add("active");
});

closeModal.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("active");
});
//MODAL ]

//Html synchronous
const friendsList = document.getElementById("tbody");
const nameInput = document.getElementById("js-friend-name");
const birthdayInput = document.getElementById("js-friend-birthday");

function createFriendRow(friend) {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
        <td>${nameInput.value}</td>
        <td>${birthdayInput.value}</td>
`;
  document.querySelector(".js-friends-table>tbody").appendChild(newRow);
}

const isValidFields = () => {
  return document.getElementById("form").reportValidity();
}

const saveFriend = () => {
  if (isValidFields()) {
    friends_db = readFriends();
    const newFriend = {
      name: nameInput.value,
      birthday: birthdayInput.value,
    };
    friends_db.push(newFriend);
    setItem(friends_db);
    console.log(readFriends());
  }
};

document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hello");
  // const friend = {
  //   name: nameInput.value,
  //   birthday: birthdayInput.value,
  // };
  // createFriendRow(friend);
  // createFriend(friend);
});

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
