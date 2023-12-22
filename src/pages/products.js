import displayCartCount from "../services/cart/cartItemCount.js";
import { getStorageItem } from "../services/utils.js";
import displayProducts from "../services/products/displayProducts.js";
import displayCompaniesFilter from "../filters/companyFilter.js";
import "../filters/priceFilter.js";
import "../services/toggleModalMenu.js";
import "../services/cart/toggleCartModal.js";

const init = () => {
  const allProducts = getStorageItem("store");
  const productsGrid = document.getElementById("products-grid");
  displayProducts(allProducts, productsGrid);
  displayCompaniesFilter();
  displayCartCount();
};

init();
