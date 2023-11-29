function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var closeButton = document.getElementsByClassName("close")[0];

    modal.style.display = "flex";
    modalImg.src = imageSrc;
    captionText.innerHTML = imageSrc.split('/').pop();

    // Event listener for the close button (click)
    closeButton.onclick = function() {
        modal.style.display = "none";
    };

    // Additional event listener for touch events
    closeButton.ontouchstart = function() {
        modal.style.display = "none";
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