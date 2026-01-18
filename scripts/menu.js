// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

// Create overlay
const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

// Toggle menu function
function toggleMenu() {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

    menuToggle.setAttribute('aria-expanded', String(!isExpanded));
    menuToggle.classList.toggle('active');
    mainNav.classList.toggle('active');
    navOverlay.classList.toggle('active');

    // Lock body scroll
    document.body.style.overflow = mainNav.classList.contains('active')
        ? 'hidden'
        : '';
}

// Events
menuToggle.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', toggleMenu);

// Close menu on link click
document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768 && mainNav.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Close menu on ESC
document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && mainNav.classList.contains('active')) {
        toggleMenu();
    }
});

// Close menu on resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && mainNav.classList.contains('active')) {
        toggleMenu();
    }
});
