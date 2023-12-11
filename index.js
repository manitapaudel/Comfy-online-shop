// const featuredProducts = allProducts.filter((product) => product.fields.featured === true);
// console.log({featuredProducts});
const shoppingCartIcon = document.getElementsByClassName("fa-shopping-cart")[0];
shoppingCartIcon.style.color = "white";

let isModalOpen = false;
const navbar = document.querySelector(".navbar");
const menuToggleBtn = document.querySelector("#menu-toggle");
const modalMenu = document.querySelector("#modal-menu");
const modalClose = document.querySelector("#modal-close");

// To check if the status is true, especially on the page's first load
if(!isModalOpen) {
    navbar.removeChild(modalMenu);
}

menuToggleBtn.addEventListener("click", () => {
    navbar.append(modalMenu);
    isModalOpen = true;
});

modalClose.addEventListener("click", () => {
    navbar.removeChild(modalMenu);
    isModalOpen = false;
});

const data = [
    {
        imageSrc: "assets/hero-bg.jpeg",
        name: "High-Back Bench",
        price: "$9.99"
    },
    {
        imageSrc: "assets/hero-bg.jpeg",
        name: "Utopia Sofa",
        price: "$48.99"
    }, 
    {
        imageSrc: "assets/hero-bg.jpeg",
        name: "Entertainment Center",
        price: "$18.99"
    }
]

const featuredSection = document.getElementById("featured-products");

data.map((datum) => {
    const product = document.createElement("div");
    const image = document.createElement("img");
    const footer = document.createElement("div");
    footer.className = "footer";
    const productName = document.createElement("p");
    productName.textContent = datum.name;
    const productPrice = document.createElement("p");
    productPrice.textContent = datum.price;
    image.src = datum.imageSrc;
    product.className = "product";
    product.append(image);
    footer.append(productName);
    footer.append(productPrice);
    product.append(footer);
    featuredSection.append(product);
    
    // styling the texts
    productName.style.color= "#617d98";
    productName.style.fontSize= "1.3rem";
    productPrice.style.fontSize= "1rem";
    productPrice.style.fontWeight= "600";
    
    // styling the images
    image.style.height = "13rem";
    image.style.width = "22rem";
    image.style.borderRadius = "4px"
})

async function getProducts() {
    const response = await fetch("https://course-api.com/javascript-store-products");
    const products = await response.json();
    allProducts = products;
    console.log(products);
    return products;
}
// getProducts();
// let allProducts = [];
// console.log("Here", allProducts);