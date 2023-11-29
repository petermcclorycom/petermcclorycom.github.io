document.addEventListener('DOMContentLoaded', (event) => {
    // Gallery items array
    const galleryItems = [
        { src: "images/01.jpg", alt: "Image 01", description: "The Earth is a living organism and we are part of it." },
        { src: "images/02.jpg", alt: "Image 02", description: "Nature's balance is delicate and crucial for our survival." },
        { src: "images/03.jpg", alt: "Image 03", description: "Our planet functions as a single organism that maintains conditions necessary for its survival." },
        { src: "images/04.jpg", alt: "Image 04", description: "In every drop of water, there is the rhythm of life." },
        { src: "images/05.jpg", alt: "Image 05", description: "Gaia whispers through the leaves of ancient trees." },
        { src: "images/06.jpg", alt: "Image 06", description: "The interconnectedness of all things is the essence of Gaia." },
        { src: "images/07.jpg", alt: "Image 07", description: "Nature's resilience is the heartbeat of our planet." },
        { src: "images/08.jpg", alt: "Image 08", description: "Every leaf, every creature, is part of the Gaian dance." },
        { src: "images/09.jpg", alt: "Image 09", description: "Breathe in nature, breathe out harmony." },
        { src: "images/10.jpg", alt: "Image 10", description: "Gaia's symphony is heard in the rustling leaves." },
        { src: "images/11.jpg", alt: "Image 11", description: "Embrace the wisdom of natural rhythms." },
        { src: "images/12.jpg", alt: "Image 12", description: "The living Earth: breathing, nurturing, sustaining." },
        { src: "images/13.jpg", alt: "Image 13", description: "Gaia's beauty is a call to preserve our world." },
        { src: "images/14.jpg", alt: "Image 14", description: "In Gaia's embrace, every species finds its place." },
        { src: "images/15.jpg", alt: "Image 15", description: "The Earth speaks in patterns, cycles, and connections." },
        { src: "images/16.jpg", alt: "Image 16", description: "Gaia: A testament to life's enduring strength." },
        { src: "images/17.jpg", alt: "Image 17", description: "Nature's harmony is the song of our existence." },
        { src: "images/18.jpg", alt: "Image 18", description: "The web of life weaves us into Gaia's tapestry." },
        { src: "images/19.jpg", alt: "Image 19", description: "Through Gaia's lens, we see the unity of all life." },
        { src: "images/20.jpg", alt: "Image 20", description: "The Earth's rhythm flows through every being." },
        { src: "images/21.jpg", alt: "Image 21", description: "Gaia's embrace is the cradle of biodiversity." },
        { src: "images/22.jpg", alt: "Image 22", description: "In the delicacy of nature, lies the key to preservation." }
    ];

    // Initialize Masonry
    var elem = document.querySelector('.gallery');
    var msnry = new Masonry(elem, {
        itemSelector: '.gallery-item',
        columnWidth: 200,
        gutter: 10,
        fitWidth: true
    });

    // Function to append images to the gallery
    function appendImages() {
        galleryItems.forEach(item => {
            let div = document.createElement('div');
            div.className = 'gallery-item';
            let image = document.createElement('img');
            image.src = item.src;
            image.alt = item.alt;
            let descriptionDiv = document.createElement('div');
            descriptionDiv.className = 'description';
            descriptionDiv.innerHTML = `<i>${item.description}</i>`;
            
            div.appendChild(image);
            div.appendChild(descriptionDiv);
            elem.appendChild(div);
        });

        // Tell Masonry that new elements have been added
        msnry.appended(Array.from(elem.querySelectorAll('.gallery-item:not(.masonry-brick)')));
        msnry.layout();
    }

    // Call the appendImages function to add the initial set of images
    appendImages();

    // Infinite scroll implementation
    window.addEventListener('scroll', () => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) { // 100px offset for triggering before reaching the bottom
            appendImages();
        }
    });
});

// Function to update Masonry layout on window resize for responsive adjustments
function updateMasonryLayout() {
    var msnry = new Masonry('.gallery', {
        itemSelector: '.gallery-item',
        columnWidth: 200,
        gutter: 10,
        fitWidth: true
    });
}

updateMasonryLayout();
window.addEventListener('resize', updateMasonryLayout);
