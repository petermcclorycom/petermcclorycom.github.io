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

    // Touch event for mobile devices
    closeButton.ontouchstart = function() {
        modal.style.display = "none";
        modalOpen = false;
        cooldown = true; // Start cooldown
        setTimeout(function() {
            cooldown = false; // End cooldown after 300 milliseconds
        }, 300);
    };
}

// Separated event listener for closing the modal by clicking outside
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

// Get all gallery images
const galleryImages = document.querySelectorAll('.gallery-item img');

// Add mouseenter event listener to each image
galleryImages.forEach((image) => {
    image.addEventListener('mouseenter', () => {
        // Reduce opacity for all other images
        galleryImages.forEach((otherImage) => {
            if (otherImage !== image) {
                otherImage.style.opacity = 0.2;
            }
        });
    });

    // Add mouseleave event listener to each image to reset opacity
    image.addEventListener('mouseleave', () => {
        // Reset opacity for all images
        galleryImages.forEach((otherImage) => {
            otherImage.style.opacity = 1;
        });
    });
});

