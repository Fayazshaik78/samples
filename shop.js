const products = [
    { id: 1, name: "Formal Shirt", price: 999, image: "WhatsApp Image 2025-10-18 at 16.47.24_b4f5f052.jpg" },
    { id: 2, name: "Casual T-Shirt", price: 699, image: "WhatsApp Image 2025-09-29 at 11.24.28_878fef4c.jpg" },
    { id: 3, name: "Slim Fit Jeans", price: 1199, image: "https://i.ibb.co/DzvVgdM/jeans.jpg" },
    { id: 4, name: "Blazer Jacket", price: 2999, image: "https://i.ibb.co/QQDgR3n/blazer.jpg" },
    { id: 5, name: "Kurta Set", price: 1499, image: "https://i.ibb.co/QDKG1gL/kurta.jpg" },
];

const productList = document.getElementById("productList");
const phoneNumber = "9618501296"; // ✅ Updated WhatsApp number

products.forEach(prod => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
        <img src="${prod.image}" alt="${prod.name}">
        <div class="product-info">
            <h3>${prod.name}</h3>
            <p>₹${prod.price}</p>
            <button onclick="orderNow('${prod.name}', ${prod.price})">Order via WhatsApp</button>
        </div>
    `;
    productList.appendChild(card);
});

function orderNow(name, price) {
    const msg = `Hello Hunter Menswear! I want to order: ${name} (₹${price}).`;
    const url = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
}
