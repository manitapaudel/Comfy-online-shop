import { getStorageItem } from "../services/utils.js";
import displayProducts from "../services/displayProducts.js";
import displayCompaniesFilter from "../filters/companyFilter.js";
import "../services/toggleModalMenu.js";
import "../filters/priceFilter.js";

const init = () => { 
    const allProducts = getStorageItem("products");
    const productsGrid = document.getElementById("products-grid");
    console.log("Here!", allProducts);
    displayProducts(allProducts, productsGrid);
    displayCompaniesFilter();
}

init();