let currentIndex = 0;
const images = document.querySelectorAll('.slide img');
const totalImages = images.length;
const backgroundBlur = document.querySelector('.background-blur');
const sliderContainerBlur = document.querySelector('.slider-container-blur');

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 100;
    document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
    const currentImage = images[currentIndex].src;
    backgroundBlur.style.backgroundImage = `url(${currentImage})`;
    sliderContainerBlur.style.backgroundImage = `url(${currentImage})`;
}

// Auto-slide functionality
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
}, 3000);

// Initial background image
const initialImage = images[currentIndex].src;
backgroundBlur.style.backgroundImage = `url(${initialImage})`;
sliderContainerBlur.style.backgroundImage = `url(${initialImage})`;
