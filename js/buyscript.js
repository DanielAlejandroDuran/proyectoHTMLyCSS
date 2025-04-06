document.addEventListener('DOMContentLoaded', function() {
    const minusButtons = document.querySelectorAll('.quantity-btn:first-child');
    const plusButtons = document.querySelectorAll('.quantity-btn:last-child');
    
    minusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quantityDiv = this.nextElementSibling;
            let quantity = parseInt(quantityDiv.textContent);
            if (quantity > 1) {
                quantityDiv.textContent = quantity - 1;
            }
        });
    });
    
    plusButtons.forEach(button => {
        button.addEventListener('click', function() {
            const quantityDiv = this.previousElementSibling;
            let quantity = parseInt(quantityDiv.textContent);
            quantityDiv.textContent = quantity + 1;
        });
    });
});