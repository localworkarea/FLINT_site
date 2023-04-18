/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, EffectCoverflow, Keyboard  } from 'swiper';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';


  // breakpoint where swiper will be destroyed
  // and switches to a dual-column layout
  const breakpoint = window.matchMedia( '(max-width:489px)' );

	let mySwiper;

  const breakpointChecker = function() {

    // if larger viewport and multi-row layout needed
    if ( breakpoint.matches === true ) {
      // clean up old instances and inline styles when available
	  if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
	  // or/and do nothing
	  return;
      // else if a small viewport and single column layout needed
      } else if ( breakpoint.matches === false ) {
        // fire small viewport version of swiper
        return enableSwiper();
      }
  };

  const enableSwiper = function() {
    mySwiper = new Swiper ('.fourth-slide__slider', {
			modules: [Navigation, EffectCoverflow, Keyboard  ],
			slideToClickedSlide: true,
			observer: true,
			observeParents: true,
			grabCursor: true,
			slidesPerView: "auto",
			centeredSlides: true,
			effect: 'coverflow',
			initialSlide: 1,
			updateOnWindowResize: true,
			
			keyboard: {
				enabled: true,
				onlyInViewport: true,
				pageUpDown: true,
			},
		
			// Брейкпоінти
			breakpoints: {
				320: {
					
				},
				490: {
					enabled: true,
					speed: 600,
					coverflowEffect: {
						rotate: 0,
						stretch: 580, // смещение в лево/право
						depth: 10,
						modifier: 1,
						slideShadows: false,
					},
				},
				769: {
					speed: 800,
					coverflowEffect: {
						rotate: 0,
						stretch: 950, // смещение в лево/право
						depth: 10,
						modifier: 1,
						slideShadows: false,
					},
				},
				1024: {
					speed: 1000,
					coverflowEffect: {
						rotate: 0,
						stretch: 400, // смещение в лево/право
						depth: 10,
						modifier: 1,
						slideShadows: false,
					},
				},
			},

    });

  };

  // keep an eye on viewport size changes
  breakpoint.addEventListener("change", breakpointChecker);

window.addEventListener("load", function (e) {
		// kickstart
		breakpointChecker();
});
 
