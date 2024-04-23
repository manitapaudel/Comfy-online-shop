const displaySingleProduct = (product, element) => {
  element.innerHTML = `<div class="product">
                <div class="product-image">
                    <img src= ${product.image} alt= ${product.name} />
                    <div class= "product-icons">
                        <a href=${`product.html?id=${product.id}`}>
                            <i class="fas fa-search"></i>
                        </a>
                        <button class="cart add-to-cart-btn" data-id="${
                          product.id
                        }" >
                            <i class="fas fa-shopping-cart"></i>
                        </button>
                    </div>
                </div>
                <div class="product-details">
                    <p class="title">${product.name}</p>
                    <p class="price">$${product.price / 100}</p>
                </div>
            </div>`;
};

export default displaySingleProduct;
