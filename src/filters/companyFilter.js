const companies = ["all", "ikea", "macros", "caressa", "liddy"];

const displayCompaniesFilter = () => {
  const sidebarCompanies = document.getElementById("companies-list");
  sidebarCompanies.innerHTML = companies
    .map((company) => {
      return `
            <li><button class="company-btn">${company}</button></li>
        `;
    })
    .join("");
};

export default displayCompaniesFilter;
