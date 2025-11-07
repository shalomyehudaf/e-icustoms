// Wait for the document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- New: Add error handling for all images ---
    // This will add a class to any image that fails to load
    document.querySelectorAll('.watch-display img').forEach(img => {
        img.addEventListener('error', () => {
            img.classList.add('is-broken');
        });
    });
    // Get references to the image elements
    const caseImg = document.getElementById('case-img');
    const dialImg = document.getElementById('dial-img');
    const bezelImg = document.getElementById('bezel-img');
    const strapImg = document.getElementById('strap-img');

    // Get references to all the radio button inputs
    const caseOptions = document.querySelectorAll('input[name="case"]');
    const dialOptions = document.querySelectorAll('input[name="dial"]');
    const bezelOptions = document.querySelectorAll('input[name="bezel"]');
    const strapOptions = document.querySelectorAll('input[name="strap"]');

    // Function to update an image
    // partName: 'case', 'dial', 'bezel', or 'strap'
    // selectedValue: 'steel', 'gold', 'white', 'black', etc.
    const updateImage = (partName, selectedValue) => {
        let imgElement;
        if (partName === 'case') imgElement = caseImg;
        else if (partName === 'dial') imgElement = dialImg;
        else if (partName === 'bezel') imgElement = bezelImg;
        else if (partName === 'strap') imgElement = strapImg;

        if (imgElement) {
            // 1. Add a class to fade the image out
            imgElement.classList.add('image-fade-out');

            // 2. Wait for the fade-out transition to finish
            setTimeout(() => {
                // 3. Change the image source
                // --- Using placeholder images from an online service ---
                const imageUrls = {
                    'case-steel': 'placeholder-for-case-steel.png',
                    'case-gold': 'placeholder-for-case-gold.png',
                    'dial-white': 'placeholder-for-dial-white.png',
                    'dial-black': 'placeholder-for-dial-black.png',
                    'strap-leather': 'placeholder-for-strap-leather.png',
                    'strap-metal': 'placeholder-for-strap-metal.png',
                    'bezel-smooth': 'placeholder-for-bezel-smooth.png',
                    'bezel-fluted': 'placeholder-for-bezel-fluted.png'
                };
                const imageKey = `${partName}-${selectedValue}`;
                imgElement.src = imageUrls[imageKey];

                // imgElement.src = `images/${partName}-${selectedValue}.png`; // Your original code for local files
                imgElement.classList.remove('is-broken'); // Attempt to load the new image
                // 4. Remove the class to fade the image back in
                imgElement.classList.remove('image-fade-out');
            }, 200); // This duration should match the CSS transition time
        }
    };

    // Add event listeners to each set of options
    caseOptions.forEach(radio => {
        radio.addEventListener('change', () => updateImage('case', radio.value));
    });

    dialOptions.forEach(radio => {
        radio.addEventListener('change', () => updateImage('dial', radio.value));
    });

    bezelOptions.forEach(radio => {
        radio.addEventListener('change', () => updateImage('bezel', radio.value));
    });

    strapOptions.forEach(radio => {
        radio.addEventListener('change', () => updateImage('strap', radio.value));
    });
});



     <!-- Watch Customizer Section -->
     <!--   <section id="watch-builder">
            <div class="container">
                <h2>Build Your Custom Timepiece</h2>
                <div class="customizer-interface">
                    --This is where the watch images will be layered
                    <div class="watch-display">
                        <div class="watch-part-placeholder" data-alt-text="Watch Strap">
                            <img id="strap-img" src="images/strap-leather.png" alt="Watch Strap">
                        </div>
                        <div class="watch-part-placeholder" data-alt-text="Watch Case">
                            <img id="case-img" src="images/case-steel.png" alt="Watch Case">
                        </div>
                        <div class="watch-part-placeholder" data-alt-text="Watch Dial">
                            <img id="dial-img" src="images/dial-white.png" alt="Watch Dial">
                        </div>
                    </div>

                    -- These are the controls for the user 
                    <div class="customization-options">
                        <fieldset>
                            <legend>Case Material</legend>
                            <label><input type="radio" name="case" value="steel" checked> Steel</label>
                            <label><input type="radio" name="case" value="gold"> Gold</label>
                        </fieldset>

                        <fieldset>
                            <legend>Dial Color</legend>
                            <label><input type="radio" name="dial" value="white" checked> White</label>
                            <label><input type="radio" name="dial" value="black"> Black</label>
                        </fieldset>

                        <fieldset>
                            <legend>Strap</legend>
                            <label><input type="radio" name="strap" value="leather" checked> Leather</label>
                            <label><input type="radio" name="strap" value="metal"> Metal</label>
                        </fieldset>
                    </div>
                </div>
            </div>
        </section>
    -->
