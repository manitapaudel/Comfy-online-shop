import displayCartCount from "./cartItemCount.js";
import findStoreItem from "../store/findStoreItem.js";
import { openCartModal } from "./toggleCartModal.js";
import { getStorageItem, setStorageItem } from "../utils.js";
import displayCartItems from "./displayCartItems.js";

const store = getStorageItem("store");
let cart = getStorageItem("cart");
const addToCart = (id) => {
  let currentItem = cart.find((cartItem) => cartItem.id === id);
  console.log("hyy", currentItem);

  if(!currentItem) {
    console.log(id, "Not found in the cart");
    let item = findStoreItem(id);
    item = {...item, amount:1};
    cart = [...cart, item];
  } else {
    const index = cart.indexOf(currentItem);
    cart[index] = {...cart[index], amount: cart[index].amount+1};
    console.log("index", index);
    console.log(id, "found in the cart");
  }
  
  setStorageItem("cart", cart);
  displayCartCount();
  displayCartItems();
  openCartModal();
};

export { addToCart };
