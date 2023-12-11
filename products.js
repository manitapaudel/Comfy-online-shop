let isModalOpen = false;
const navbar = document.querySelector(".navbar");
const menuToggleBtn = document.querySelector("#menu-toggle");
const modalMenu = document.querySelector("#modal-menu");
const modalClose = document.querySelector("#modal-close");

if(!isModalOpen) {
    navbar.removeChild(modalMenu);
}

menuToggleBtn.addEventListener("click", () => {
    console.log("Now, show the modal");
    navbar.append(modalMenu);
    isModalOpen = true;
});

modalClose.addEventListener("click", () => {
    console.log("Now, remove the modal");
    navbar.removeChild(modalMenu);
    isModalOpen = false;
});