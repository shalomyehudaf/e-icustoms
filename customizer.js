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
                    'case-steel': 'https://i.postimg.cc/m2x116Jc/case-steel.png',
                    'case-gold': 'https://i.postimg.cc/L6T0YxG3/case-gold.png',
                    'dial-white': 'https://i.postimg.cc/L8pL5f50/dial-white.png',
                    'dial-black': 'https://i.postimg.cc/Nf21k1sT/dial-black.png',
                    'strap-leather': 'https://i.postimg.cc/25TFBp1M/strap-leather.png',
                    'strap-metal': 'https://i.postimg.cc/8z3X7pMm/strap-metal.png',
                    'bezel-smooth': 'https://i.postimg.cc/W1d4TRtD/bezel-smooth.png',
                    'bezel-fluted': 'https://i.postimg.cc/4dFm9WfV/bezel-fluted.png'
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
