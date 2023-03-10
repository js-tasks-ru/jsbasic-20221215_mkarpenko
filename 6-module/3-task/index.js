import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = this.createCarousel();
    this.addEventListeners();
  }

  createCarousel() {
    let html = createElement(`
      <div class="carousel">
  
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
  
      ${this.createCarouselSlides(this.slides)}
  
    </div>
      `);
    return html;
  }

  createCarouselSlides(slides) {
    let htmlSlides = '';
    for (let slide of slides) {
      htmlSlides += `
        <div class="carousel__slide" data-id=${slide.id}>
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `;
    }
    let carouselSlidesHtml = `<div class="carousel__inner">${htmlSlides}</div>`;
    return carouselSlidesHtml;
  }

  addEventListeners() {
    const arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    const arrowRight = this.elem.querySelector('.carousel__arrow_right');
    let totalSlides = this.slides.length;
    let shift = 0;
    arrowLeft.style.display = 'none';

    this.elem.addEventListener('click', ({ target }) => {
      const slider = this.elem.querySelector('.carousel__inner');
      let width = slider.offsetWidth;
      let maxTranslate = width * (totalSlides - 1);

      if (target.closest('.carousel__arrow_right')) {
        slider.style.transform = `translateX(${shift -= width}px)`;
        arrowLeft.style.display = '';
        if (shift * -1 === maxTranslate) {
          arrowRight.style.display = 'none';
        }
      }

      if (target.closest('.carousel__arrow_left')) {
        slider.style.transform = `translateX(${shift += width}px)`;
        if (shift === 0) {
          arrowLeft.style.display = 'none';
        }
      }

      let addButton = target.closest('.carousel__button');
      if (addButton) {
        const customEvent = new CustomEvent('product-add', {
          detail: addButton.closest('.carousel__slide').dataset.id,
          bubbles: true
        });

        this.elem.dispatchEvent(customEvent);
      }
    })
  }

}
