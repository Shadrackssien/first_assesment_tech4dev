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
  <!-- image -->
  <div class="mx-16 mt-8 mb-[60px] rounded-lg">
    <img class="w-[100%] h-[480px] object-cover object-center border border-gray-300 rounded-[20px]" src="${
      product.image
    }" alt="${product.title}" />
  </div>
  
  <!-- Main content -->
  <div class="flex gap-4">
  <!-- Product content -->
  <div>
    <!-- title -->
  <div class="mx-16 flex flex-col gap-2">
  <h1 class="text-[24px] leading-[28.13px] font-bold w-[650px] h-[30px]">${
    product.title
  }</h1>

  <!-- details -->
  <div class="flex flex-col gap-[8px]">
    <div class="flex flex-row gap-2 ">
    <img class="w-[18px] h-[19.5px] mt-8" src="assets/vector1.png" alt="vector 1" />
    <p class="mt-8">Price: $ ${product.price.toFixed(2)}</p>
    </div>
    <div class="flex flex-row gap-2 ">
    <img class="w-[18px] h-[19.5px]" src="assets/vector2.png" alt="vector 1" />
    <p>Category: ${product.category}</p>
    </div>
    <div class="flex flex-row gap-2 ">
    <img class="w-[18px] h-[19.5px]" src="assets/vector3.png" alt="vector 1" />
    <p>Rating: ${product.rating.rate} (${product.rating.count} reviews)</p>
    </div>
  </div>

  <!-- description -->
  <div class="mt-8 ">
    <p class="font-bold text-[16px] leading-[18.75px] mb-4">Event description</p>
    <p class="w-[875px]  text-[16px] leading-[18.75px]"> ${
      product.description
    }</p>
  </div>

  <!-- Ticket Pricing -->
  <div class="mt-16 ">
    <p class="font-bold text-[16px] leading-[18.75px] mb-8">Tickets Pricing</p>
    <div class="flex flex-row gap-16">
    <div class="flex flex-col gap-2">
    <p class="text-[20px] font-medium leading-[23.44px]" >Single</p>
    <p class="text-[#9B51E0]">NGN 5,000</p>
    </div>
    <div class="flex flex-col gap-2">
    <p class="text-[20px] font-medium leading-[23.44px]">Pair</p>
    <p class="text-[#9B51E0]" >NGN 9,000</p>
    </div>
    </div>
    <button class="button mt-16">Buy now</button>
    </div>
    </div>
  </div>

  <!-- Contact Orgainizers and Directions -->
  <div>
  <!-- Contact Organizers and Directions -->
      <div>
        <!-- Contact Organizers -->
        <div class="flex flex-col gap-4 mt-16">
        <p class="font-bold text-[16px] leading-[18.75px] mb-2">Contact Organizers</p>
        <div class="flex flex-row gap-[24px]">
        <img src="assets/p1.png" alt="p 1" />
          <img src="assets/p2.png" alt="p 1" />
          <img src="assets/p3.png" alt="p 1" />
        </div>
          
        </div>

        <!-- Directions -->
        <div class="flex flex-col gap-4 mt-16">
        <p class="font-bold text-[16px] leading-[18.75px] mb-2">Directions</p>
        <img class="w-[400px] h-[452px]" src="assets/directions.png" alt="directions" />
        </div>
      </div>
  </div>
  </div>
  `;
};
