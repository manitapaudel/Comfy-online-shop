import { addToCart } from "../cart/cart.js";
import "../cart/toggleCartModal.js";

const displayProducts = (data, section) => {
    section.innerHTML = data.map((product) => {
      return `<div class="product">
              <div class="product-image">
                  <img src= ${product.image} alt= ${
        product.name
      } />
                  <div class= "product-icons">
                      <a href=${`product.html?id=${product.id}`}>
                          <i class="fas fa-search"></i>
                      </a>
                      <button class="cart add-to-cart-btn" data-id="${product.id}" >
                          <i class="fas fa-shopping-cart"></i>
                      </button>
                  </div>
              </div>
              <div class="product-details">
                  <p class="title">${product.name}</p>
                  <p class="price">$${product.price / 100}</p>
              </div>
          </div>`;
    }).join('');

    const addToCartBtn = document.querySelectorAll(".add-to-cart-btn");
    console.log("why", addToCartBtn);

    section.addEventListener('click', function (e) {
        const parent = e.target.parentElement;
        if(parent.classList.contains('add-to-cart-btn')) {
            addToCart( parent.dataset.id);
        }
      });
  };

  export default displayProducts;
  