import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {initTabs} from './modules/tabs/init-tabs';
import {initAccordions} from './modules/accordion/init-accordion';
import Swiper from './vendor/swiper';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  const trainersSwiper = new Swiper('#swiper-trainers', {
    direction: 'horizontal',
    autoHeight: true,
    loop: true,
    slidesPerView: 4,
    spaceBetween: 40,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 38,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: '.trainers__swiper-button-next',
      prevEl: '.trainers__swiper-button-prev',
    },
  });
  window.trainersSwiper = trainersSwiper;
  // swiper-reviews

  const reviewsSwiper = new Swiper('#swiper-reviews', {
    direction: 'horizontal',
    autoHeight: true,
    loop: false,
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews__swiper-button-next',
      prevEl: '.reviews__swiper-button-prev',
    },
  });
  window.reviewsSwiper = reviewsSwiper;

  let playButton = document.querySelector('.gym__play-button-wrapper');
  let video = document.querySelector('.gym__video');
  let image = document.querySelector('.gym__video-image');

  if (playButton) {

    playButton.addEventListener('click', function () {

      playButton.style.display = 'none';

      if (image && video) {
        image.style.display = 'none';

        video.style.display = 'block';
      }
    });
  }

  let buyPassButton = document.getElementById('buyPassButton');
  let passesBlock = document.getElementById('passesBlock');

  if (buyPassButton && passesBlock) {
    buyPassButton.addEventListener('click', function (event) {
      event.preventDefault();
      passesBlock.scrollIntoView({behavior: 'smooth'});
    });
  }

  let footerTrainer = document.getElementById('footerTrainer');
  let trainersBlock = document.getElementById('trainersBlock');

  if (footerTrainer && trainersBlock) {
    footerTrainer.addEventListener('click', function (event) {
      event.preventDefault();
      trainersBlock.scrollIntoView({behavior: 'smooth'});
    });
  }

  const form = document.getElementById('appointmentForm');
  const nameInput = document.getElementById('nameInput');
  const nameLabel = nameInput.parentElement;

  const phoneInput = document.getElementById('phoneInput');
  phoneInput.addEventListener('input', function (event) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9\s]/g, '');
  });
  const phoneLabel = phoneInput.parentElement;

  form.addEventListener('submit', function (event) {
    if (nameInput.value === '') {
      event.preventDefault();
      nameLabel.classList.add('appointment-field__form-label--error');
    } else {
      nameLabel.classList.remove('appointment-field__form-label--error');
    }

    if (phoneInput.value === '') {
      event.preventDefault();
      phoneLabel.classList.add('appointment-field__form-label--error');
    } else {
      phoneLabel.classList.remove('appointment-field__form-label--error');
    }
  });

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    // init modals
    initModals();

    // init tabs
    initTabs();

    // init accordion
    initAccordions();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
