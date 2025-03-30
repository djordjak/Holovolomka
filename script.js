let currentIndex = 0;

function showSlide(index) {
    const slider = document.querySelector(".slider-container");
    const totalSlides = document.querySelectorAll(".slider-container img").length;
    
    if (index >= totalSlides) {
        currentIndex = 0; // Повертаємось до першої картинки
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Повертаємось до останньої
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}