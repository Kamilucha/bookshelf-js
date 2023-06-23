import { supportItem } from './support-array';
// console.log(supportItem);

import Swiper, { Navigation } from 'swiper';

import 'swiper/swiper.min.css';
import 'swiper/modules/navigation/navigation.min.css';

const supportList = document.querySelector('.support-list');

function makeMarkupOfSupport({ title, url, img }, index) {
  const number = (index + 1).toString().padStart(2, '0');
  return `<li class="swiper-slide support-slide">
        <div class="support-item">
        <span class="support-index">${number}</span>
        <a class="support-link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
            <img class="support-image"
                srcset="${img.x1} 1x, ${img.x2} 2x"
                src="${img.x1}" type="image/png" alt="${title}">
        </a>
    </li>`;
}

const markupOfSupport = supportItem.map(makeMarkupOfSupport).join('');
// console.log(markupOfSupport);

supportList.innerHTML = markupOfSupport;

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 4,
  slidesOffsetAfter: 0,

  // slidesPerGroup: 1,
  rewind: true,
  spaceBetween: 20,
  effect: 'slide',
  breakpoints: {
    376: {
      slidesPerView: 6,
      // slidesPerGroup: 1,
    },
  },
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-next',
  },
});
