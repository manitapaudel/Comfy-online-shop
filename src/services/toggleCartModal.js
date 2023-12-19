const cartButtons = document.querySelectorAll(".cart");
const cartModalOverlay = document.querySelector(".cart-modal-overlay");
const closeCart = document.querySelector("#cart-close");
console.log("hi", cartButtons)

cartButtons.forEach((cartButton) =>{
  cartButton.addEventListener("click", () => {
    cartModalOverlay.classList.add("show");
    console.log("is it working??");
  })
});

closeCart.addEventListener("click", () => {
  cartModalOverlay.classList.remove("show");
});
