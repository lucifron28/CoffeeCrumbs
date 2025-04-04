let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <div class="item-details">
                <img src="assets/images/${item.name.toLowerCase().replace(/\s+/g, '-')}.png" alt="${item.name}">
                <span>${item.name} (x${item.quantity})</span>
            </div>
            <span>P${(item.price * item.quantity).toFixed(2)}</span>
            <button class="remove-btn" data-name="${item.name}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    cartTotalElement.innerText = `Total: P${total.toFixed(2)}`;

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const name = e.target.getAttribute('data-name');
            const cartItem = e.target.parentElement;

            cartItem.classList.add('removing');
            setTimeout(() => {
                removeFromCart(name);
            }, 300);
        });
    });
}

function removeFromCart(name) {
    const itemIndex = cart.findIndex(item => item.name === name);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
}

function checkoutCart() {
    if (cart.length === 0) {
        alert("Your cart is empty. Add items to checkout.");
        return;
    }
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    alert("Checkout successful! Thank you for your purchase.");
}

document.addEventListener('DOMContentLoaded', () => {
    updateCart();

    const checkoutButton = document.getElementById('checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', checkoutCart);
    }
});
