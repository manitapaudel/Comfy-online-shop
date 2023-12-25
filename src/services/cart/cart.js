import displayCartCount from "./cartItemCount.js";
import findStoreItem from "../store/findStoreItem.js";
import { openCartModal } from "./toggleCartModal.js";
import { getStorageItem, setStorageItem } from "../utils.js";
import displayCartItems, { displayCartItemsCount } from "./displayCartItems.js";
import { displayTotal } from "./cartTotal.js";

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

const removeFromCart = (id) => {
  let currentItem = cart.find((cartItem) => cartItem.id === id);
  const index = cart.indexOf(currentItem);
  cart.splice(index, 1);
  setStorageItem("cart", cart);
  displayCartCount();
  displayCartItems();
  displayCartItemsCount(id);
  displayTotal();
};

const decreaseOneItem = (id) => {
  let currentItem = cart.find((cartItem) => cartItem.id === id);

  if (currentItem.amount > 1) {
    const index = cart.indexOf(currentItem);
    cart[index] = { ...cart[index], amount: cart[index].amount - 1 };
    setStorageItem("cart", cart);
    displayCartCount();
    displayCartItems();
    displayCartItemsCount(id);
    displayTotal();
  } else {
    removeFromCart(id);
  }
};

export { addToCart, removeFromCart, decreaseOneItem };
