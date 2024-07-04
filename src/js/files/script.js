// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


document.addEventListener("DOMContentLoaded", function () {
	const tabs = document.querySelectorAll(".tab-btn");
	const tabContents = document.querySelectorAll(".tab-content");
	const images = document.querySelectorAll(".partners__tab-btn-image img");

	tabs.forEach(function (tab, index) {
		tab.addEventListener("click", function () {
			const target = this.getAttribute("data-target");

			tabs.forEach(function (tab) {
				tab.classList.remove("active");
			});
			this.classList.add("active");

			tabContents.forEach(function (content) {
				if (content.id === target) {
					content.classList.add("active");
				} else {
					content.classList.remove("active");
				}
			});

			images.forEach(function (img, imgIndex) {
				if (index === imgIndex) {
					img.style.opacity = '1';
				} else {
					img.style.opacity = '0.3'; // або інше значення непрозорості
				}
			});
		});
	});

	// Установлюємо активний таб і зображення при завантаженні сторінки
	const activeTab = document.querySelector(".tab-btn.active");
	if (activeTab) {
		const target = activeTab.getAttribute("data-target");
		const activeContent = document.getElementById(target);
		if (activeContent) {
			activeContent.classList.add("active");
		}
		const activeImg = activeTab.querySelector("img");
		if (activeImg) {
			activeImg.style.opacity = '1';
		}
	}
});
