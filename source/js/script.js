let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

function initCatSlider() {
  const container = document.querySelector('.slider');
  document.querySelector('.slider__range')?.addEventListener('input', (e) => {
    container.style.setProperty('--persent', `${e.target.value}%`);
    document.querySelector('output').innerHTML = `${e.target.value}%`;
  });
}

initCatSlider();
