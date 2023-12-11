// const featuredProducts = allProducts.filter((product) => product.fields.featured === true);
// console.log({featuredProducts});
const shoppingCartIcon = document.getElementsByClassName("fa-shopping-cart")[0];
shoppingCartIcon.style.color = "white";

let isModalOpen = false;
let isShowingProductIcons = false;
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

async function getProducts() {
    try {
        const response = await fetch("https://course-api.com/javascript-store-products");
        const products = await response.json();
        localStorage.setItem("store", JSON.stringify(products));
    } catch (e) {
        console.log(e);
    }
}
getProducts();

const data = [
    {
        id: "1q",
        imageSrc: "assets/hero-bg.jpeg",
        name: "High-Back Bench",
        price: "$9.99"
    },
    {
        id: "2q",
        imageSrc: "assets/hero-bg.jpeg",
        name: "Utopia Sofa",
        price: "$48.99"
    }, 
    {
        id: "3q",
        imageSrc: "assets/hero-bg.jpeg",
        name: "Entertainment Center",
        price: "$18.99"
    }
]

const featuredSection = document.getElementById("featured-products");

    featuredSection.innerHTML = 
    data.map((product) => {
        return `<div class="product">
            <div class="product-image">
                <img src= ${product.imageSrc} alt= ${product.name} />
                <div class= "product-icons">
                    <a href=${`product.html/?id=${product.id}`}>
                        <i class="fas fa-search"></i>
                    </a>
                    <button>
                        <i class="fas fa-shopping-cart"></i>
                    </button>
                </div>
            </div>
            <div class="product-details">
                <p class="title">${product.name}</p>
                <p class="price">${product.price}</p>
            </div>
        </div>`
    })
    const products = JSON.parse(localStorage.getItem("store"));
    console.log("Hi i Yam", products);
  
// const productImages = document.querySelectorAll(".product-image");
// const productIcons = document.querySelector(".product-icons");
// console.log({productImages});

// productImages.forEach((productImage) => { 
//     productImage.addEventListener("mouseenter", () => {
//     productImage.appendChild(productIcons);
//     isShowingProductIcons = true;
// })

// productImage.addEventListener("mouseout", () => {
//     productImage.removeChild(productIcons);
//     isShowingProductIcons = false;
// })
// })