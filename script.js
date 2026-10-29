let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSlideView() {
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    
    // Manage arrow visibility
    document.getElementById('prevBtn').disabled = currentSlide === 0;
    document.getElementById('nextBtn').disabled = currentSlide === totalSlides - 1;
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) currentSlide = 0;
    if (currentSlide >= totalSlides) currentSlide = totalSlides - 1;
    updateSlideView();
}

// Arrow key functionality for seamless projector presentation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
        if (currentSlide < totalSlides - 1) changeSlide(1);
    } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        if (currentSlide > 0) changeSlide(-1);
    }
});

// Initialize on load
updateSlideView();