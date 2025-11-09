document.addEventListener('DOMContentLoaded', () => {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    const testimonialItems = document.querySelectorAll('.testimonial-item');

    // Only run the slider if there are testimonials on the page
    if (testimonialsGrid && testimonialItems.length > 0) {
        let currentIndex = 0;
        const totalItems = testimonialItems.length;
        let slideInterval;

        // --- Create navigation dots ---
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'testimonial-dots';
        // Insert dots container after the grid, inside the wrapper
        testimonialsGrid.parentElement.appendChild(dotsContainer);

        const dots = [];
        testimonialItems.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => {
                showTestimonial(index);
                // Reset the auto-play timer when a dot is clicked
                clearInterval(slideInterval);
                slideInterval = setInterval(nextTestimonial, 8000); // Restart interval
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);
        });

        // Function to show the current testimonial
        const showTestimonial = (index) => {
            currentIndex = index;
            // Calculate the offset to move the grid horizontally
            const offset = -index * 100;
            testimonialsGrid.style.transform = `translateX(${offset}%)`;

            // Update active dot
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        };

        // Function to advance to the next testimonial
        const nextTestimonial = () => {
            const nextIndex = (currentIndex + 1) % totalItems;
            showTestimonial(nextIndex);
        };

        // Initial setup
        showTestimonial(0); // Show the first slide and set the first dot active
        slideInterval = setInterval(nextTestimonial, 5000); // Start auto-rotation
    }
});