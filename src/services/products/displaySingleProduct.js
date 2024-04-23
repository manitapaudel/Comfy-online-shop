import { addToCart } from "../cart/cart.js";

const displaySingleProduct = (product, element) => {
  element.innerHTML = `
                <div class="product-image">
                    <img src= ${product.image} alt= ${product.name} />
                </div>
                <div class="product-details">
                    <p class="title">${product.name}</p>
                    <p class="company">By ${product.company.toUpperCase()}</p>
                    <p class="price">$${product.price / 100}</p>
                    <p class="description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam iusto eum voluptatem tenetur sunt dolor at ullam suscipit vel amet.</p>
                    <button class="primary-btn add-to-cart-btn" >Add to Cart</button>
                </div>
            `;

  element.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart-btn")) {
      addToCart(product.id);
    }
  });
};

export default displaySingleProduct;
