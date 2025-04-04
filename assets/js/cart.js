let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ${item.name} (x${item.quantity}) - P${(item.price * item.quantity).toFixed(2)}
            <button class="remove-btn" data-name="${item.name}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotalElement.innerText = `Total: P${total.toFixed(2)}`;

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const name = e.target.getAttribute('data-name');
            removeFromCart(name);
        });
    });
}

function removeFromCart(name) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1); // Remove item from cart
    }
    localStorage.setItem('cart', JSON.stringify(cart)); // Update localStorage
    updateCart(); // Update cart display
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});
