const addFriendButton = document.getElementById("insert-friends-button");
const closeModal = document.querySelector(".close-modal");

addFriendButton.addEventListener('click', () => {
    document.querySelector(".modal").classList.add("active");
});

closeModal.addEventListener('click', () => {
    document.querySelector(".modal").classList.remove("active");
});
