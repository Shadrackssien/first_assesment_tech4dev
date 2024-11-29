import { ProductService } from "./product.js";

const productService = new ProductService();

// Extract the product ID from the URL query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productId = urlParams.get("id");

// Fetch and display product details
if (productId) {
  productService
    .getProductById(productId)
    .then((product) => {
      displayProductDetails(product);
    })
    .catch((error) => {
      console.error("Error fetching product details:", error);
    });
}

const displayProductDetails = (product) => {
  const detailsContainer = document.getElementById("product-details");

  detailsContainer.innerHTML = `
  <div class="head">

    <img class="image" src="${product.image}" alt="${product.title}" />
  </div>
  <div class="body">
  <h1 class="title">${product.title}</h1>
    <p class="price"><strong>Price:</strong> $ ${product.price.toFixed(2)}</p>
    <p class="description"><strong>Description:</strong> ${
      product.description
    }</p>
    <p class="category"><strong>Category:</strong> ${product.category}</p>
    <p class="rating"><strong>Rating:</strong> ${product.rating.rate} (${
    product.rating.count
  } reviews)</p>
    <div class="buttons">
    <button class="add-to-cart">Add to Cart</button>
    <button class="buy-now">Buy Now</button>
    </div>
    
  </div>
  `;
};
