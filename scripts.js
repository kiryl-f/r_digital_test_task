document.addEventListener('DOMContentLoaded', function() {
    const cartButtons = document.querySelectorAll('.product-item button');
    let cartCount = 0;

    cartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            document.querySelector('.cart a').textContent = `Корзина (${cartCount})`;
            alert('Товар добавлен в корзину!');
        });
    });
});
