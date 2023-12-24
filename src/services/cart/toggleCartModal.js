import { displayTotal } from "./cartTotal.js";
import displayCartItems from "./displayCartItems.js";

const cartButtons = document.querySelectorAll(".cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");
const closeCart = document.querySelector("#cart-close");
console.log("hi", cartButtons)

cartButtons.forEach((cartButton) =>{
  cartButton.addEventListener("click", () => {
    cartModalOverlay.classList.add("show");
    console.log("is it working??");
  })
  displayTotal();
});

closeCart.addEventListener("click", () => {
  cartModalOverlay.classList.remove("show");
});

export const openCartModal = () => {
  cartModalOverlay.classList.add("show");
  displayCartItems();
  displayTotal();
}
