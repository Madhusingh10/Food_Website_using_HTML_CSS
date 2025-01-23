document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.getElementById('services');
  const carouselInner = carousel.querySelector('.carousel-inner');
  const carouselItems = carouselInner.children;
  const carouselPrev = carousel.querySelector('.carousel-prev');
  const carouselNext = carousel.querySelector('.carousel-next');

  let currentSlide = 0;

  carouselPrev.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = carouselItems.length - 1;
    }
    carouselInner.style.transform = `translateX(${currentSlide * -100}%)`;
  });

  carouselNext.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= carouselItems.length) {
      currentSlide = 0;
    }
    carouselInner.style.transform = `translateX(${currentSlide * -100}%)`;
  });

  // Add event listener to flip boxes
  const flipBoxes = document.querySelectorAll('.flip-box');

  flipBoxes.forEach((flipBox) => {
    flipBox.addEventListener('click', () => {
      flipBox.classList.toggle('flipped');
    });
  });
});
