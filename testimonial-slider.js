document.addEventListener('DOMContentLoaded', () => {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    const originalItems = document.querySelectorAll('.testimonial-item');

    // Only run the slider if there are testimonials on the page
    if (testimonialsGrid && originalItems.length > 0) {
        // --- Setup for Infinite Loop ---
        // 1. Clone first and last items
        const firstClone = originalItems[0].cloneNode(true);
        const lastClone = originalItems[originalItems.length - 1].cloneNode(true);

        // 2. Add clones to the grid
        testimonialsGrid.appendChild(firstClone);
        testimonialsGrid.insertBefore(lastClone, originalItems[0]);

        // 3. Update items list and initial position
        const allItems = document.querySelectorAll('.testimonial-item');
        let currentIndex = 1; // Start at the first real item (after the cloned last item)
        testimonialsGrid.style.transform = `translateX(-${currentIndex * 100}%)`;

        const totalOriginalItems = originalItems.length;
        let slideInterval;

        // --- Create navigation dots ---
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'testimonial-dots';
        testimonialsGrid.parentElement.appendChild(dotsContainer);

        const dots = [];
        originalItems.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => {
                showTestimonial(index + 1); // Adjust index for clones
                clearInterval(slideInterval);
                slideInterval = setInterval(nextTestimonial, 5000);
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);
        });

        // Function to show a testimonial
        const showTestimonial = (index) => {
            currentIndex = index;
            testimonialsGrid.style.transition = 'transform 0.5s ease-in-out';
            const offset = -index * 100;
            testimonialsGrid.style.transform = `translateX(${offset}%)`;

            // Update active dot
            const activeDotIndex = (currentIndex - 1 + totalOriginalItems) % totalOriginalItems;
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === activeDotIndex);
            });
        };

        // Function to advance to the next testimonial
        const nextTestimonial = () => {
            showTestimonial(currentIndex + 1);
        };

        // --- Handle the loop ---
        testimonialsGrid.addEventListener('transitionend', () => {
            if (currentIndex === 0) { // If we are at the cloned last slide
                testimonialsGrid.style.transition = 'none'; // Turn off animation
                showTestimonial(totalOriginalItems); // Jump to the real last slide
            }
            if (currentIndex === totalOriginalItems + 1) { // If we are at the cloned first slide
                testimonialsGrid.style.transition = 'none'; // Turn off animation
                showTestimonial(1); // Jump to the real first slide
            }
        });

        // Initial setup
        showTestimonial(1); // Show the first real slide and set the first dot active
        slideInterval = setInterval(nextTestimonial, 5000); // Start auto-rotation
    }
});