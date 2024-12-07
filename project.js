// Products array
const products = [
    { id: 1, name: "Laptop", price: 1500, stock: 5 },
    { id: 2, name: "Headphones", price: 100, stock: 10 },
    { id: 3, name: "Keyboard", price: 50, stock: 20 },
];

// Add to cart functionality (implement logic here)
function addToCart(productId) {
    // Fetch product data and update stock (this can be expanded based on your requirements)
    const product = products.find(p => p.id === productId);
    if (product && product.stock > 0) {
        product.stock--;
        document.getElementById(`stock${productId}`).innerText = `In Stock: ${product.stock}`;
        // Show notification (optional)
        document.getElementById('notification').classList.remove('d-none');
        document.getElementById('notification').innerText = `${product.name} added to cart!`;
