const IMAGES = ["imgs/dog-image-1.jpg",
    "imgs/dog-image-2.jpg",
    "imgs/dog-image-3.jpg"]

const ICONS = document.getElementById('icons');
const MAIN_IMAGE = document.getElementById('main-image');

for (const imageKey in IMAGES) {
    let image = document.createElement('img');
    image.src = IMAGES[imageKey];
    image.className = 'images';
    ICONS.appendChild(image)
    image.addEventListener('click', (evt) => {
        MAIN_IMAGE.src = image.src;
    })
}

MAIN_IMAGE.src = IMAGES[0];