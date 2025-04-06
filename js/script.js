document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
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
    
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });
});