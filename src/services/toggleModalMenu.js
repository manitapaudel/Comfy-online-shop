let isModalOpen = false;
let isShowingProductIcons = false;
const navbar = document.querySelector(".navbar");
const menuToggleBtn = document.querySelector("#menu-toggle");
const modalMenu = document.querySelector("#modal-menu");
const modalClose = document.querySelector("#modal-close");
const menuModalOverlay = document.querySelector(".modal-menu-overlay");

// To check if the status is true, especially on the page's first load
if (!isModalOpen) {
  menuModalOverlay.classList.remove("show");
}

menuToggleBtn.addEventListener("click", () => {
  menuModalOverlay.classList.add("show");
  isModalOpen = true;
});

modalClose.addEventListener("click", () => {
  menuModalOverlay.classList.remove("show");
  isModalOpen = false;
});
