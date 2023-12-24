import displayCartCount from "./cartItemCount.js";
import findStoreItem from "../store/findStoreItem.js";
import { openCartModal } from "./toggleCartModal.js";
import { getStorageItem, setStorageItem } from "../utils.js";
import displayCartItems, { displayCartItemsCount } from "./displayCartItems.js";

const store = getStorageItem("store");
let cart = getStorageItem("cart");
const addToCart = (id) => {
  let currentItem = cart.find((cartItem) => cartItem.id === id);

  if (!currentItem) {
    let item = findStoreItem(id);
    item = { ...item, amount: 1 };
    cart = [...cart, item];
  } else {
    const index = cart.indexOf(currentItem);
    cart[index] = { ...cart[index], amount: cart[index].amount + 1 };
  }

  setStorageItem("cart", cart);
  displayCartCount();
  displayCartItems();
  displayCartItemsCount(id);
  openCartModal();
};

const increaseItemCount = (id) => {
  let currentItem = cart.find((item) => item.id === id);
  // let item = findStoreItem(id);
  currentItem = { ...currentItem, amount: currentItem.amount + 1 }
  cart = [...cart, currentItem];
  setStorageItem("cart", cart);
};

export { addToCart, increaseItemCount };
