const displayProducts = (data, section) => {
    section.innerHTML = data.map((product) => {
      return `<div class="product">
              <div class="product-image">
                  <img src= ${product.fields.image[0].url} alt= ${
        product.fields.name
      } />
                  <div class= "product-icons">
                      <a href=${`product.html?id=${product.id}`}>
                          <i class="fas fa-search"></i>
                      </a>
                      <button>
                          <i class="fas fa-shopping-cart"></i>
                      </button>
                  </div>
              </div>
              <div class="product-details">
                  <p class="title">${product.fields.name}</p>
                  <p class="price">$${product.fields.price / 100}</p>
              </div>
          </div>`;
    });
  };

  export default displayProducts;