import { getStorageItem } from "../utils.js";

const cart = getStorageItem("cart");

const displayCartItems = () => {
  const cartItems = document.querySelector(".cart-items");

  cartItems.innerHTML = cart.map((item) => {
    return `<div class="cart-item" data-id="${item.id}">
                <img src=${item.image} alt=${item.name }/>
                <div class="item-info">
                    <p>
                        <span id="name">${item.name}</span>
                        <span id="price">$${item.price/100}</span>
                    </p>
                    <button id="remove-item">remove</button>
                </div>
                <div class="buttons" >
                    <button id="add-one"><i class="fas fa-chevron-up"></i></button>
                    <span>${item.amount}</span>
                    <button id="remove-one" ><i class="fas fa-chevron-down"></i></button>
                </div>
            </div>`
  }).join("");
  console.log("I am actually here!");
};

export default displayCartItems;
