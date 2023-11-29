var modalOpen = false; // Declare this variable outside the function

function openModal(imageSrc) {
    if (window.innerWidth > 480) { // Only open modal on non-mobile devices
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        modal.style.display = "flex";
        modalImg.src = imageSrc;
        captionText.innerHTML = imageSrc.split('/').pop();

        modalImg.onload = function() {
            if (modalImg.naturalWidth > modalImg.naturalHeight) {
                modalImg.style.height = 'auto';
                modalImg.style.width = '100%';
            } else {
                modalImg.style.width = 'auto';
                modalImg.style.height = '100%';
            }
        };
        modalOpen = true; // Set the modal as open
    }
}

// Set up closeButton event listener outside the openModal function
var closeButton = document.getElementsByClassName("close")[0];
closeButton.onclick = function() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    modalOpen = false;
    setTimeout(function() {
        modalOpen = true;
    }, 300);
};

function spinAndRevealText(containerElement) {
    if (window.innerWidth <= 480) { // Check if the device is likely a mobile device
        containerElement.classList.add('spin'); // Add class to trigger the animation
    }
}

// Separated event listener for closing the modal by clicking outside
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
        modalOpen = false;
    }
};

function updateYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

updateYear();
