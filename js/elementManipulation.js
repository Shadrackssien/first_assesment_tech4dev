import { ProductService, Product } from "./product.js";

export const createCard = (product) => {
  // card container
  const card = document.createElement("div");
  card.className =
    "my-4 border border-1-[#E0E0E0] rounded-lg bg-white flex flex-col gap-2 w-[421px] h-[488px] shadow-lg hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02] text-black no-underline";

  // image
  const image = document.createElement("img");
  image.className =
    "w-auto h-1/2 object-cover object-center mx-auto mt-4 rounded-t-lg";
  image.src = product.image;
  image.alt = product.title;
  card.appendChild(image);

  // title
  const title = document.createElement("div");
  title.className =
    "mx-4 text-[16px] font-semibold leading-[18.75px] mt-1 text-ellipsis line-clamp-2 ";
  title.textContent = product.title;
  card.appendChild(title);

  // price
  const price = document.createElement("div");
  price.className = "mx-4 text-[14px] font-medium leading-[16.41px] mb-2";
  price.textContent = `$ ${product.price.toFixed(2)}`;
  card.appendChild(price);

  // description
  const description = document.createElement("div");
  description.className =
    "mx-4 mb-3 text-[14px] font-normal leading-[16.41px] text-ellipsis line-clamp-3 overflow-hidden";
  description.textContent = product.description;
  card.appendChild(description);

  // details
  const details = document.createElement("div");
  details.className = "mx-4 flex flex-row items-center gap-1 mb-3";

  const link = document.createElement("a");
  link.href = `details.html?id=${product.id}`;
  link.textContent = "View details";
  link.className = "text-primary text-[14px] leading-[16.41px] font-semibold";

  // SVG icon
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("viewBox", "0 0 16 16");
  svg.setAttribute("fill", "currentColor");
  svg.classList.add("text-primary", "size-4");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute(
    "d",
    "M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z"
  );
  path.setAttribute("clip-rule", "evenodd");
  svg.appendChild(path);

  details.appendChild(link);
  details.appendChild(svg);
  card.appendChild(details);

  return card;
};
