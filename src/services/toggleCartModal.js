const cartButton = document.querySelector(".cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");
const closeCart = document.querySelector("#cart-close");

cartButton.addEventListener("click", () => {
    cartModalOverlay.classList.add("show");
});

closeCart.addEventListener("click", () => {
    cartModalOverlay.classList.remove("show");
})