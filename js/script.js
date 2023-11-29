var modalOpen = false;

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