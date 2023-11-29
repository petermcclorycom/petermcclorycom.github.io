var modalOpen = false; // Declare this variable outside the function

function openModal(imageSrc) {
    if (modalOpen) return; // Prevent opening if modal is already open or in cooldown

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
        // Delay before allowing modal to be reopened
        setTimeout(function() {
            modalOpen = true;
        }, 300); // 300 milliseconds delay
    };

    // Touch event for mobile devices
    closeButton.ontouchstart = function() {
        modal.style.display = "none";
        modalOpen = false;
        setTimeout(function() {
            modalOpen = true;
        }, 300);
    };
}

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
