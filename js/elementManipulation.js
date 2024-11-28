import { ProductService, Product } from "./product.js";

export const createCard = (product) => {
  // card container
  const card = document.createElement("div");
  card.classList.add("card");

  // image
  const image = document.createElement("img");
  image.classList.add("image");
  image.src = product.image;
  image.alt = product.title;
  card.appendChild(image);

  // title
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = product.title;
  card.appendChild(title);

  // price
  const price = document.createElement("div");
  price.classList.add("price");
  price.textContent = `$ ${product.price.toFixed(2)}`;
  card.appendChild(price);

  // description
  const description = document.createElement("div");
  description.classList.add("description");
  description.textContent = product.description;
  card.appendChild(description);

  // details
  const details = document.createElement("div");
  details.classList.add("details");

  const link = document.createElement("a");
  link.href = "#";
  link.textContent = "View details";

  // SVG icon
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 16 16");
  svg.setAttribute("fill", "currentColor");
  svg.classList.add("size-4");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute(
    "d",
    "M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
  );
  path.setAttribute("clip-rule", "evenodd");
  svg.appendChild(path);

  link.appendChild(svg);
  details.appendChild(link);
  card.appendChild(details);

  return card;
};
