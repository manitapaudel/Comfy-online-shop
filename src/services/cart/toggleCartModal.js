import { displayTotal } from "./cartTotal.js";
import displayCartItems from "./displayCartItems.js";

const cartButton = document.querySelector(".cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");
const closeCart = document.querySelector("#cart-close");

  cartButton.addEventListener("click", () => {
    cartModalOverlay.classList.add("show");
    displayTotal();
    displayCartItems();
  })

closeCart.addEventListener("click", () => {
  cartModalOverlay.classList.remove("show");
});

export const openCartModal = () => {
  cartModalOverlay.classList.add("show");
  displayTotal();
}
