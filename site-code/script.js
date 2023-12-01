var modalOpen = false; // Declare this variable outside the function
var cooldown = false; // Add a cooldown variable

function openModal(imageSrc) {
    if (modalOpen || cooldown) return; // Prevent opening if modal is already open or in cooldown

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var closeButton = document.getElementsByClassName("close")[0];

    modal.style.display = "flex";
    modalImg.src = imageSrc;
    captionText.innerHTML = imageSrc.split('/').pop();
    modalOpen = true; // Set modal as open

    closeButton.onclick = function() {
        modal.style.display = "none";
        modalOpen = false;
        cooldown = true; // Start cooldown
        setTimeout(function() {
            cooldown = false; // End cooldown after 300 milliseconds
        }, 300);
    };

    closeButton.ontouchstart = function() {
        modal.style.display = "none";
        modalOpen = false;
        cooldown = true; // Start cooldown
        setTimeout(function() {
            cooldown = false; // End cooldown after 300 milliseconds
        }, 300);
    };
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
        modalOpen = false;
        cooldown = true; // Start cooldown
        setTimeout(function() {
            cooldown = false; // End cooldown after 300 milliseconds
        }, 300);
    }
};

function updateYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

updateYear();

var modalOpen = false; // Declare this variable outside the function
var cooldown = false; // Add a cooldown variable

function openModal(imageSrc) {
    if (modalOpen || cooldown) return; // Prevent opening if modal is already open or in cooldown

    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var closeButton = document.getElementsByClassName("close")[0];

    modal.style.display = "flex";
    modalImg.src = imageSrc;
    captionText.innerHTML = imageSrc.split('/').pop();
    modalOpen = true; // Set modal as open

    closeButton.onclick = function() {
        modal.style.display = "none";
        modalOpen = false;
        cooldown = true; // Start cooldown
        setTimeout(function() {
            cooldown = false; // End cooldown after 300 milliseconds
        }, 300);
    };

    closeButton.ontouchstart = function() {
        modal.style.display = "none";
        modalOpen = false;
        cooldown = true; // Start cooldown
        setTimeout(function() {
            cooldown = false; // End cooldown after 300 milliseconds
        }, 300);
    };
}

window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
        modalOpen = false;
        cooldown = true; // Start cooldown
        setTimeout(function() {
            cooldown = false; // End cooldown after 300 milliseconds
        }, 300);
    }
};

function updateYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

updateYear();

const backgroundFade = document.getElementById('background-fade');
const fadeDuration = 300; // Duration of the fade effect in milliseconds (0.3 seconds)

// Function to control the background fade
const setBackgroundFade = (opacity) => {
    backgroundFade.style.opacity = opacity;
};

const galleryImages = document.querySelectorAll('.gallery-item img');

// Function to handle image movement
const moveImageToCursor = (event, image) => {
    const rect = image.getBoundingClientRect();
    const imageCenterX = rect.left + rect.width / 2;
    const imageCenterY = rect.top + rect.height / 2;

    let translateX = (event.clientX - imageCenterX) * 0.8;
    let translateY = (event.clientY - imageCenterY) * 0.8;

    image.style.transform = `scale(2) translate(${translateX}px, ${translateY}px)`;
};

// Check if the device is a mobile device
const isMobileDevice = () => {
    return window.innerWidth <= 768; // You can adjust this threshold as needed
};

galleryImages.forEach((image) => {
    // Initial style setup
    image.style.border = '1px solid transparent';
    image.style.zIndex = 0; // Default z-index for non-hovered images
    image.style.position = 'static'; // Default position
    image.style.transition = 'transform 2s ease-out, opacity 0.5s, border-color 0.5s ease-out';

    // Attach hover effects only for desktop devices
    if (!isMobileDevice()) {
        image.addEventListener('mouseenter', (e) => {
            moveImageToCursor(e, image);
            image.addEventListener('mousemove', (event) => moveImageToCursor(event, image));

            image.style.borderColor = 'black';
            image.style.zIndex = 10; // Higher z-index on hover
            image.style.position = 'relative'; // Make position relative on hover
                // Fade the background to black when hovering
        setBackgroundFade(0.9); // You can adjust the opacity value as needed

            // Dim and shrink other images
            galleryImages.forEach((otherImage) => {
                if (otherImage !== image) {
                    otherImage.style.opacity = 0;
                    otherImage.style.transform = 'scale(0.1)';
                }
            });
        });

        image.addEventListener('mouseleave', () => {
            image.removeEventListener('mousemove', (event) => moveImageToCursor(event, image));

            // Reset image styles
            image.style.opacity = 1;
            image.style.transform = 'none';
            image.style.borderColor = 'transparent';
            image.style.zIndex = 0; // Reset z-index
            image.style.position = 'static'; // Reset position to static
            image.style.transition = 'transform 1s ease-out, opacity 0.2s, border-color 1s ease-out';

            // Fade the background back to transparent when leaving
            setBackgroundFade(0);

            // Reset styles for other images
            galleryImages.forEach((otherImage) => {
                otherImage.style.opacity = 1;
                otherImage.style.transform = 'scale(1)';
            });
        });
    }
});

