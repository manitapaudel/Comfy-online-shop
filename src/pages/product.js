import displayCartCount from "../services/cart/cartItemCount.js";
import "../services/toggleModalMenu.js";
import "../services/cart/toggleCartModal.js";
import { getStorageItem } from "../services/utils.js";

const init = () => {
  const allProducts = getStorageItem("store");
  const productsGrid = document.getElementById("products-grid");
  const searchParams = new URLSearchParams(window.location.search);
  const currentId = searchParams.get("id");

  const currentProduct = allProducts.find(
    (product) => product.id === currentId
  );
  displayCartCount(currentProduct, productsGrid);
};

init();
