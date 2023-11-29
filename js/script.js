function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "flex"; // Changed to 'flex' for centering
    modalImg.src = imageSrc;
    captionText.innerHTML = imageSrc.split('/').pop();

    modalImg.onload = function() {
        if (modalImg.naturalWidth > modalImg.naturalHeight) {
            // Landscape
            modalImg.style.height = 'auto';
            modalImg.style.width = '100%';
        } else {
            // Portrait or square
            modalImg.style.width = 'auto';
            modalImg.style.height = '100%';
        }
    };

    // When the user clicks anywhere outside of the modalImg, close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
}

// Function to update the current year in the footer
function updateYear() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

// Call the function when the page loads
updateYear();