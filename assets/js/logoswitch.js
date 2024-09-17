const logo = document.getElementById('navbar-logo');
let isLogoAnimating = false;
let currentLogo = 'assets/image/Logo.svg';

function changeLogo(newSrc) {
    if (isLogoAnimating || currentLogo === newSrc) return;
    isLogoAnimating = true;
    
    logo.classList.add('logo-transition');
    
    setTimeout(() => {
        logo.src = newSrc;
        currentLogo = newSrc;
        logo.classList.remove('logo-transition');
        isLogoAnimating = false;
    }, 500);
}

window.addEventListener('scroll', function() {
    if (window.scrollY > 600) {
        navbar.classList.add('active');
        changeLogo('assets/image/LogoAgencyWhite.svg');
    } else {
        if (!isMenuOpen) {
            navbar.classList.remove('active');
            changeLogo('assets/image/Logo.svg');
        }
    }
});
