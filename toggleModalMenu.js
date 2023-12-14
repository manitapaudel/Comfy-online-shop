let isModalOpen = false;
let isShowingProductIcons = false;
const navbar = document.querySelector(".navbar");
const menuToggleBtn = document.querySelector("#menu-toggle");
const modalMenu = document.querySelector("#modal-menu");
const modalClose = document.querySelector("#modal-close");

// To check if the status is true, especially on the page's first load
if(!isModalOpen) {
    navbar.removeChild(modalMenu);
}

menuToggleBtn.addEventListener("click", () => {
    navbar.append(modalMenu);
    isModalOpen = true;
});

modalClose.addEventListener("click", () => {
    navbar.removeChild(modalMenu);
    isModalOpen = false;
});
