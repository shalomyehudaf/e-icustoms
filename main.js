document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const nav = document.getElementById('main-nav');

    hamburgerButton.addEventListener('click', () => {
        // Toggle the 'is-active' class on both the button and the navigation
        hamburgerButton.classList.toggle('is-active');
        nav.classList.toggle('is-active');
        // Update the aria-expanded attribute for accessibility
        hamburgerButton.setAttribute('aria-expanded', nav.classList.contains('is-active'));
    });
});