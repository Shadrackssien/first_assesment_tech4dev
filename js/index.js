import { createCard } from "./elementManipulation.js";
import { ProductService } from "./product.js";

const productService = new ProductService();

productService.getProducts().then((products) => {
  const container = document.getElementById("container");
  products.forEach((product) => {
    const card = createCard(product);
    container.appendChild(card);
  });
});
