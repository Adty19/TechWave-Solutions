const hamburger = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');

let isSticky = false;
let isMenuOpen = false;

window.addEventListener('scroll', function() {
    if (window.scrollY > 600) {
        navbar.classList.add('active');
        isSticky = true;
    } else {
        if (!isMenuOpen) {
            navbar.classList.remove('active');
        }
        isSticky = false;
    }
});

hamburger.addEventListener('click', function() {
    isMenuOpen = !isMenuOpen;
    
    if (isMenuOpen) {
        navbar.classList.add('active');
    } else {
        if (!isSticky) {
            navbar.classList.remove('active');
        }
    }
});
