export function initSlider(startIndex = 0) {
  const slider = document.querySelector('.slider');
  const images = [...slider.querySelectorAll('.slider__image')];
  const dots = [...slider.querySelectorAll('.slider__dot')];

  let currentIndex = startIndex;

  function setActive(index = 0) {
    images.forEach((image, i) => {
      image.classList.toggle('slider__image--active', i === index);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle('slider__dot--active', i === index);
    });

    currentIndex = index;
  }

  setActive();

  slider.addEventListener('click', (e) => {
    const dot = e.target.closest('.slider__dot');

    if (!dot) {
      return;
    }

    setActive(+dot.dataset.index);
  });
};
