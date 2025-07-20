const products = [
  { name: "Product A", price: 120, image: "https://via.placeholder.com/300x200?text=A" },
  { name: "Product B", price: 80, image: "https://via.placeholder.com/300x200?text=B" },
  { name: "Product C", price: 150, image: "https://via.placeholder.com/300x200?text=C" },
];

const productList = document.getElementById("product-list");
const sortSelect = document.getElementById("sort");

function displayProducts(list) {
  productList.innerHTML = "";
  list.forEach(p => {
    const card = document.createElement("div");
    card.className = "product";
    card.innerHTML = `
      <img loading="lazy" src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
    `;
    productList.appendChild(card);
  });
}

function sortProducts(method) {
  let sorted = [...products];
  if (method === "price-asc") sorted.sort((a, b) => a.price - b.price);
  else if (method === "price-desc") sorted.sort((a, b) => b.price - a.price);
  displayProducts(sorted);
}

sortSelect.addEventListener("change", e => sortProducts(e.target.value));
displayProducts(products);
