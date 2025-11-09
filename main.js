document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const nav = document.getElementById('main-nav');
    const header = document.querySelector('header');

    // --- Hamburger Menu Logic ---
    hamburgerButton.addEventListener('click', () => {
        // Toggle the 'is-active' class on both the button and the navigation
        hamburgerButton.classList.toggle('is-active');
        nav.classList.toggle('is-active');
        // Update the aria-expanded attribute for accessibility
        hamburgerButton.setAttribute('aria-expanded', nav.classList.contains('is-active'));
    });

    // --- Header Scroll Logic ---
    const handleScroll = () => {
        // Add 'scrolled' class to header if user has scrolled more than 50px
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
});