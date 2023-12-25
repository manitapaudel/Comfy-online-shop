import { getStorageItem } from "../utils.js";
import { addToCart } from "./cart.js";

const cartItems = document.querySelector(".cart-items");

const displayCartItems = () => {
  const cart = getStorageItem("cart");
  const cartItems = document.querySelector(".cart-items");

  cartItems.innerHTML = cart
    .map((item) => {
      return `<div class="cart-item">
                <img src=${item.image} alt=${item.name}/>
                <div class="item-info">
                    <p>
                        <span id="name">${item.name}</span>
                        <span id="price">$${item.price / 100}</span>
                    </p>
                    <button class="remove-item" data-id="${
                      item.id
                    }">remove</button>
                </div>
                <div class="buttons" >
                    <button class="add-one" data-id="${
                      item.id
                    }"><i class="fas fa-chevron-up"></i></button>
                    <span id="item-count" data-id="${item.id}" >${
        item.amount
      }</span>
                    <button class="remove-one" data-id="${
                      item.id
                    }"><i class="fas fa-chevron-down"></i></button>
                </div>
            </div>`;
    })
    .join("");
};

cartItems.addEventListener("click", (e) => {
  let parent = e.target.parentElement;
  if (parent.classList.contains("add-one")) {
    addToCart(parent.dataset.id);
  }
});

export const displayCartItemsCount = (id) => {
  const cart = getStorageItem("cart");
  const itemCount = document.querySelector("#item-count");
  const currentItem = cart.find((item) => item.id === id);
  if (itemCount.dataset.id === id) {
    itemCount.innerText = currentItem.amount;
  }
};

export default displayCartItems;
