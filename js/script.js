function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "flex";
    modalImg.src = ""; // Reset the image source
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