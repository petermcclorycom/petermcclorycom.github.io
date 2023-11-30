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
    image.addEventListener('mouseenter', () => {
        image.style.transition = 'opacity 0.5s, transform 0.5s';
        image.style.opacity = 1;
        image.style.transform = 'scale(1.5)'; // Scale up by 1.5x

        galleryImages.forEach((otherImage) => {
            if (otherImage !== image) {
                otherImage.style.opacity = 0.2;
                otherImage.style.transform = 'scale(0.1)'; // Scale down other images to 0.1x
            }
        });
    });

    image.addEventListener('mouseleave', () => {
        galleryImages.forEach((otherImage) => {
            otherImage.style.opacity = 1;
            otherImage.style.transform = 'scale(1)'; // Reset scale to original
        });
    });
});
