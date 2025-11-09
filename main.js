document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.querySelector('.hamburger-menu');
    const nav = document.getElementById('main-nav');

    // --- Hamburger Menu Logic ---
    hamburgerButton.addEventListener('click', () => {
        // Toggle the 'is-active' class on both the button and the navigation
        hamburgerButton.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
});