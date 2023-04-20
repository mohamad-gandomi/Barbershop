import './style.css'
import './js/custome'
import '@splidejs/splide/dist/css/splide.min.css'
import Splide from '@splidejs/splide'
document.addEventListener('DOMContentLoaded', function () {
  new Splide('.splide', {
    perPage: 4,
    perMove: 1,
    gap: 16,
    autoWidth: true,
    drag: 'free',
    type: 'loop',
    breakpoints: {
      640: {
        perPage: 1,
        perMove: 1,
        autoWidth: false,
        focus: 'center',
        snap: true,
        gap: 0,
      },
    },
  }).mount()
})
