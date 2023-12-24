import { getStorageItem } from "../utils.js"

const cartItemCount = () => {
    const cart = getStorageItem("cart");
    let itemCount = cart.reduce((temp, init) => {
        temp+= init.amount;
        return temp;
    },0)
    return itemCount;
}

const displayCartCount = () => {
    const cartCount = document.querySelector(".cart-count");
    const count = cartItemCount();
    cartCount.innerText = count;
}

export default displayCartCount;
