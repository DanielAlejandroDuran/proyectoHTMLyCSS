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
    
    document.getElementById("pay-button").addEventListener("click", function () {
        Swal.fire({
          title: "Confirm?",
          text: "Would you like to confirm your purchase?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, pay now!"
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              title: "Payment Complete!",
              text: "Thank you for your purchase.",
              icon: "success",
              timer: 2000,
              showConfirmButton: false
            });
            setTimeout(() => {
              window.location.href = "checkout.html";
            }, 2000);
          }
        });
      });
    
});