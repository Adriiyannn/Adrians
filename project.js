
// Hard-coded JSON data for products
const products = [
    {
        name: "Laptop",
        price: "₱1500",
        stock: 5,
        image: "https://p-ph.ipricegroup.com/uploaded_c03580ddbdb51455312d67f356ab535e95a51c4e.jpg",
        description: "A powerful laptop for work and play.",
    },
    {
        name: "Headphones",
        price: "₱100",
        stock: 10,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVYM4CNA4h9WJPgtz2jpsqnBCfP4FOEIVEw&s",
        description: "High-quality sound with noise cancellation.",
    },
    {
        name: "Keyboard",
        price: "₱50",
        stock: 20,
        image: "https://matrixshop.in/cdn/shop/files/keyboardnewmockup.png?v=1699352887&width=533",
        description: "A mechanical keyboard for gamers.",
    },
];

// Function to render products
function renderProducts() {
    const container = document.getElementById("product-container");
    products.forEach((product) => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>${product.price}</strong></p>
                        <p class="card-text">Stock: ${product.stock}</p>
                        <button class="btn btn-primary" onclick="buyNow(this)">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Function to handle buy now button click
function buyNow(button) {
    button.innerText = "Success"; // Change button text to 'Success'
    button.disabled = true; // Optionally disable the button after clicking
    alert("Purchase successful!"); // Show success message
}

// Call the function to render products
renderProducts();
