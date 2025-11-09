document.addEventListener('DOMContentLoaded', () => {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    // Only run the slider if there are testimonials on the page
    if (testimonialsGrid && testimonialItems.length > 0) {
        let currentIndex = 0;
        const totalItems = testimonialItems.length;

        // Function to show the current testimonial
        const showTestimonial = (index) => {
            // Calculate the offset to move the grid horizontally
            const offset = -index * 100;
            testimonialsGrid.style.transform = `translateX(${offset}%)`;
        };

        // Function to advance to the next testimonial
        const nextTestimonial = () => {
            currentIndex = (currentIndex + 1) % totalItems;
            showTestimonial(currentIndex);
        };

        // Set an interval to automatically rotate testimonials every 5 seconds
        setInterval(nextTestimonial, 5000); // 5000 milliseconds = 5 seconds

        // --- Optional: Add navigation dots ---
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'testimonial-dots';
        testimonialsGrid.parentElement.appendChild(dotsContainer);

        testimonialItems.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                showTestimonial(index);
            });
            dotsContainer.appendChild(dot);
        });
    }
});