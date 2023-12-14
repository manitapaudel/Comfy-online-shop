import { getStorageItem } from "../services/utils.js";
import "../services/toggleModalMenu.js";
import displayProducts from "../services/displayProducts.js";

const init = () => {
    const allProducts = getStorageItem("products");
    const productsGrid = document.getElementById("products-grid");
    displayProducts(allProducts, productsGrid);
}

init();