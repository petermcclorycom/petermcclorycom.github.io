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

const galleryImages = document.querySelectorAll('.gallery-item img');

galleryImages.forEach((image) => {

    // Set initial border as transparent for all images
    image.style.border = '2px solid transparent';
    image.style.transition = 'border-color 0.5s ease-out';

    image.addEventListener('mouseenter', () => {
        const rect = image.getBoundingClientRect();
        const imageCenterX = rect.left + rect.width / 2;
        const imageCenterY = rect.top + rect.height / 2;

        const windowCenterX = window.innerWidth / 2;
        const windowCenterY = window.innerHeight / 2;

        let translateX = windowCenterX - imageCenterX;
        let translateY = windowCenterY - imageCenterY;

        // Limit the translation to a maximum of 100 pixels
        translateX = Math.max(Math.min(translateX, 100), -100);
        translateY = Math.max(Math.min(translateY, 100), -100);

        image.style.transition = 'opacity 0.5s, transform 4s ease-out'; // Increased duration and added ease-out
        image.style.opacity = 1;
        image.style.transform = `scale(2) translate(${translateX}px, ${translateY}px)`; 

         // Change border color to black on hover and z-index
        image.style.borderColor = 'black';
        image.style.zIndex = 10; // Ensure it's above other images

         setTimeout(() => {
             image.style.transition += ', border-opacity 0.5s ease-out';
             image.style.borderOpacity = 1; // Transition to full opacity
         }, 0); // Timeout to ensure the transition is applied

        galleryImages.forEach((otherImage) => {
            if (otherImage !== image) {
                otherImage.style.opacity = 0.4;
                otherImage.style.transform = 'scale(0.2)';
            }
        });

    });

    image.addEventListener('mouseleave', () => {

// Reset border color to transparent and reset z-index
image.style.borderColor = 'transparent';
image.style.zIndex = 0; // Reset z-index

        galleryImages.forEach((otherImage) => {
            otherImage.style.opacity = 1;
            otherImage.style.transition = 'opacity 0.5s, transform 2s ease-out';
            otherImage.style.transform = 'none';
        });
    });
});
