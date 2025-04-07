document.addEventListener('DOMContentLoaded', function() {
    const sizeOptions = document.querySelectorAll('.size-option');
    sizeOptions.forEach(option => {
      option.addEventListener('click', function() {
        sizeOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
      });
      
      option.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          sizeOptions.forEach(opt => opt.classList.remove('selected'));
          this.classList.add('selected');
        }
      });
    });
    
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
      option.addEventListener('click', function() {
        colorOptions.forEach(opt => opt.classList.remove('selected'));
        this.classList.add('selected');
      });
      
      option.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          colorOptions.forEach(opt => opt.classList.remove('selected'));
          this.classList.add('selected');
        }
      });
    });
    
    const decreaseBtn = document.querySelector('.decrease');
    const increaseBtn = document.querySelector('.increase');
    const quantityInput = document.querySelector('.quantity-input');
    
    decreaseBtn.addEventListener('click', function() {
      let value = parseInt(quantityInput.value);
      if (value > 1) {
        quantityInput.value = value - 1;
      }
    });
    
    increaseBtn.addEventListener('click', function() {
      let value = parseInt(quantityInput.value);
      quantityInput.value = value + 1;
    });
    
    quantityInput.addEventListener('keydown', function(e) {
      e.preventDefault();
    });
    
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', function() {
      alert('Volviendo a la página anterior');
    });
    
    const favoriteButtons = document.querySelectorAll('.favorite-button');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const svg = this.querySelector('svg');
            if(svg.getAttribute('fill') === 'none') {
                svg.setAttribute('fill', '#ff3366');
                svg.setAttribute('stroke', '#ff3366');
            } else {
                svg.setAttribute('fill', 'none');
                svg.setAttribute('stroke', '#000');
            }
        });
    });
    
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    addToCartBtn.addEventListener('click', function() {
      const size = document.querySelector('.size-option.selected').textContent;
      const color = document.querySelector('.color-option.selected').style.backgroundColor;
      const quantity = quantityInput.value;
      
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
        alert(`Añadido al carrito: ${quantity} Light Dress Bless, Talla ${size}`);
      }, 150);
    });
    
    const readMore = document.querySelector('.read-more');
    readMore.addEventListener('click', function(e) {
      e.preventDefault();
      const description = document.querySelector('.product-description');
      
      if (this.textContent === 'Read More...') {
        description.textContent = 'Its simple and elegant shape makes it perfect for those of you who like you who want minimalist clothing. Made with premium-quality fabric that feels soft against your skin and provides ultimate comfort throughout the day. The versatile design allows you to dress it up with accessories for special occasions or keep it casual for everyday wear.';
        this.textContent = 'Read Less';
        description.appendChild(this);
      } else {
        description.textContent = 'Its simple and elegant shape makes it perfect for those of you who like you who want minimalist clothing. ';
        this.textContent = 'Read More...';
        description.appendChild(this);
      }
    });
    
    document.addEventListener('touchstart', function(e) {
      if (e.target.tagName === 'BUTTON' || e.target.classList.contains('size-option') || e.target.classList.contains('color-option')) {
        e.preventDefault();
      }
    }, { passive: false });
    
    window.addEventListener('resize', function() {
      adjustLayoutForOrientation();
    });
    
    function adjustLayoutForOrientation() {
      const container = document.querySelector('.container');
      if (window.innerWidth > window.innerHeight) {
        container.style.display = 'flex';
        document.querySelector('.product-image-container').style.width = '50%';
        document.querySelector('.product-info').style.width = '50%';
      } else {
        container.style.display = 'block';
        document.querySelector('.product-image-container').style.width = '100%';
        document.querySelector('.product-info').style.width = '100%';
      }
    }
    
    adjustLayoutForOrientation();
  });