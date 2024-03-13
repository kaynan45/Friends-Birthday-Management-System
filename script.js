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
