import { getStorageItem } from "../utils.js"

const cartTotal = () => {
    const cart = getStorageItem("cart");
    const totalAmount = cart.reduce((total, current) => {
        total+= current.amount*(current.price/100);
        return total;
    },0)
    return totalAmount;
}

const displayTotal = () => {
    const totalPrice = document.querySelector(".total-price");
    totalPrice.innerText = `$${cartTotal()}`;
}

export { displayTotal };
