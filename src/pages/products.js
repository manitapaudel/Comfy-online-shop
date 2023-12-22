import displayCartCount from "../services/store/CartItemCount.js";
import { getStorageItem } from "../services/utils.js";
import displayProducts from "../services/displayProducts.js";
import displayCompaniesFilter from "../filters/companyFilter.js";
import "../filters/priceFilter.js";
import "../services/toggleModalMenu.js";
import "../services/toggleCartModal.js";

const init = () => {
  const allProducts = getStorageItem("store");
  const productsGrid = document.getElementById("products-grid");
  displayProducts(allProducts, productsGrid);
  displayCompaniesFilter();
  displayCartCount();
};

init();
