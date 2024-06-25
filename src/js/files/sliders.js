/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
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
import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.partners__slider')) { // Вказуємо клас потрібного слайдера
		// Підраховуємо кількість слайдів
		const swiperSlides = document.querySelectorAll('.partners__slider .swiper-slide').length;

		// Створюємо слайдер
		new Swiper('.partners__slider', { // Вказуємо клас потрібного слайдера
			// Підключаємо модулі слайдера для конкретного випадку
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: Math.min(swiperSlides, 6), // Максимальна кількість слайдів для перегляду
			spaceBetween: 20,
			speed: 800,
			loop: swiperSlides > 1, // Вмикаємо loop лише якщо більше одного слайда
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			breakpoints: {
				320: {
					slidesPerView: 2,
					spaceBetween: 10,
				},
				500: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1024: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1280: {
					slidesPerView: swiperSlides < 6 ? swiperSlides : 6, // Встановлюємо 6 або менше, залежно від кількості слайдів
					spaceBetween: 20,
				},
			},
		});
	}
	if (document.querySelector('.company-team__slider')) { // Вказуємо клас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.company-team__slider', { // Вказуємо клас потрібного слайдера
			// Підключаємо модулі слайдера для конкретного випадку
			modules: [Navigation, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 2,
			spaceBetween: 20,
			speed: 800,
			loop: true,
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			navigation: {
				prevEl: '.company-team__swiper-button-prev',
				nextEl: '.company-team__swiper-button-next',
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				451: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				922: {
					slidesPerView: 1,
					spaceBetween: 0,
				},
				1269: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
			},
		});
	}
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});
