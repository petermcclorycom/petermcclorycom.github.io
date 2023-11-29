function openModal(imageSrc) {
    if (window.innerWidth > 480) { // Only open modal on non-mobile devices
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");

        modal.style.display = "flex";
        modalImg.src = imageSrc;
        captionText.innerHTML = imageSrc.split('/').pop();

    closeButton.onclick = function() {
        modal.style.display = "none";
        modalOpen = false;
        // Delay before allowing modal to be reopened
        setTimeout(function() {
            modalOpen = true;
        }, 300); // 300 milliseconds delay
    };

    modalImg.onload = function() {
        if (modalImg.naturalWidth > modalImg.naturalHeight) {
            modalImg.style.height = 'auto';
            modalImg.style.width = '100%';
        } else {
            modalImg.style.width = 'auto';
            modalImg.style.height = '100%';
        }
    };
}
}

function spinAndRevealText(containerElement) {
    if (window.innerWidth <= 480) { // Check if the device is likely a mobile device
        containerElement.classList.add('spin'); // Add class to trigger the animation
    }
}

// Separated event listener for closing the modal
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

function updateYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

updateYear();