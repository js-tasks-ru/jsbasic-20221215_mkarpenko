function initCarousel() {
  const arrowLeft  = document.querySelector('.carousel__arrow_left');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const carousel   = document.querySelector('.carousel__inner');
  const width = carousel.offsetWidth;
  let shift = 0;
  arrowLeft.style.display = 'none';

  arrowLeft.addEventListener('click', function() {
    carousel.style.transform = `translateX(${shift += width}px)`;
    arrowRight.style.display = '';
    if (shift === 0) {
      arrowLeft.style.display = 'none';

    }
  });

  arrowRight.addEventListener('click', function() {
    carousel.style.transform = `translateX(${shift -= width}px)`;
    arrowLeft.style.display = '';
    if (shift === width * -3) {
      arrowRight.style.display = 'none';
    }
  });
}
