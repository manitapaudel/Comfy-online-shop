import displayCartCount from "./src/services/cart/cartItemCount.js";
import fetchProducts from "./src/services/products/fetchProducts.js";
import displayProducts from "./src/services/products/displayProducts.js";
import setupStore from "./src/services/store/setupStore.js";
import { getStorageItem } from "./src/services/utils.js";
import "./src/services/toggleModalMenu.js";
import "./src/services/cart/toggleCartModal.js";

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
  displayCartCount();
};

window.addEventListener("DOMContentLoaded", init);
