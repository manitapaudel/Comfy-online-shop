import fetchProducts from "./src/services/fetchProducts.js";
import displayProducts from "./src/services/displayProducts.js";
import setupStore from "./src/services/setupStore.js";
import "./src/services/toggleModalMenu.js";
import "./src/services/toggleCartModal.js";
import { getStorageItem } from "./src/services/utils.js";

const shoppingCartIcon = document.getElementsByClassName("fa-shopping-cart")[0];
shoppingCartIcon.style.color = "white";

const init = async () => {
  const data = await fetchProducts();
  setupStore(data);
  const featuredSection = document.getElementById("featured-products");
  const products = getStorageItem("store");
  const featuredProducts = products.filter(
    (product) => product.featured === true
  );
  displayProducts(featuredProducts, featuredSection);
};

window.addEventListener("DOMContentLoaded", init);
