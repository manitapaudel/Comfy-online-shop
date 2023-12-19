import displayProducts from "../services/displayProducts.js";
import { getStorageItem } from "../services/utils.js";

const companies = ["all", "ikea", "marcos", "caressa", "liddy"];

const displayCompaniesFilter = () => {
  const products = getStorageItem("store");
  const sidebarCompanies = document.getElementById("companies-list");
  sidebarCompanies.innerHTML = companies
    .map((company) => {
      return `
            <li><button class="company-btn">${company}</button></li>
        `;
    })
    .join("");

    filterByCompany(products);
};

const filterByCompany = (products) => {
  const productsGrid = document.getElementById("products-grid");
  const sidebarCompanies = document.getElementById("companies-list");

  // check for the outerText and filter the specific company's products
  sidebarCompanies.addEventListener("click", (e) => {
    console.log("y?", e)
    const element = e.target;
    if (element.className === "company-btn") {
      let filteredList = [];
      const companyName = element.textContent;
      if (companyName === "all") {
        filteredList = products;
      } else {
        filteredList = products.filter(
          (product) => product.company === companyName
        );
      }console.log({filteredList});
      displayProducts(filteredList, productsGrid);
    }
  });
}

export default displayCompaniesFilter;
