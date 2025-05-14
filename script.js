document.getElementById('themeToggle').addEventListener('click', () => {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  html.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
});

// Карусель изображений
let carouselIndex = 0;
const images = document.querySelectorAll('.carousel-image');

function showNextImage() {
  images[carouselIndex].classList.remove('active');
  carouselIndex = (carouselIndex + 1) % images.length;
  images[carouselIndex].classList.add('active');
}

setInterval(showNextImage, 4000);
