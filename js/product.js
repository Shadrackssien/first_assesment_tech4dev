export class ProductService {
  #handlePromise = async ({ url, method = "GET", body = null }) => {
    try {
      const response = await fetch(`https://fakestoreapi.com/${url}`, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : null,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error in fetching data:", error.message);
      throw error;
    }
  };

  getProducts = async () => {
    const response = await this.#handlePromise({ url: "products" });
    return await response;
  };

  getProductById = async (id) => {
    const response = await this.#handlePromise({ url: `products/${id}` });
    return await response;
  };

  deleteProduct = async (id) => {
    const response = await this.#handlePromise({
      url: `products/${id}`,
      method: "DELETE",
    });
    return await response;
  };
}

export class Product {
  constructor({ id, title, image, price, rating, category, description }) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.price = price;
    this.rating = rating;
    this.category = category;
    this.description = description;
  }
  id;
  title;
  image;
  price;
  rating;
  category;
  description;
}

const product = new Product({
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: {
    rate: 3.9,
    count: 120,
  },
});

// const productService = new ProductService();

// productService.getProducts().then((products) => {
//   console.log("Fetched Products:", products);
// });
