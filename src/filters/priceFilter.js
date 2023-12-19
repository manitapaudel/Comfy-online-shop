import displayProducts from "../services/displayProducts.js";
import { getStorageItem } from "../services/utils.js";

const priceRangeInput = document.getElementById("price");
const priceValue = document.getElementById("price-value");

priceRangeInput.addEventListener("input", (e) => {
  const element = e.target;
  console.log("y tho", element.value);
  priceValue.textContent = element.value;
  filterByPrice(element.value);
});

const filterByPrice = (price) => {
  const products = getStorageItem("store");
  const productsGrid = document.getElementById("products-grid");

  const filteredProducts = products.filter(
    (product) => product.price / 100 <= price
  );
  displayProducts(filteredProducts, productsGrid);
};

export default filterByPrice;
