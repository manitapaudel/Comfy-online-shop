import fetchProducts from "./src/services/fetchProducts.js";
import displayProducts from "./src/services/displayProducts.js";
import { setStorageItem } from "./src/services/utils.js";
import "./src/services/toggleModalMenu.js";
import "./src/services/toggleCartModal.js";

const shoppingCartIcon = document.getElementsByClassName("fa-shopping-cart")[0];
shoppingCartIcon.style.color = "white";

const init = async () => {
  const products = await fetchProducts();
  setStorageItem("products", products);
  const featuredSection = document.getElementById("featured-products");
  const featuredProducts = products.filter(
    (product) => product.fields.featured === true
  );
  displayProducts(featuredProducts, featuredSection);
};

window.addEventListener("DOMContentLoaded", init);
