// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


document.addEventListener("DOMContentLoaded", function () {
	const tabs = document.querySelectorAll(".tab-btn");
	const tabContents = document.querySelectorAll(".tab-content");

	tabs.forEach(function (tab) {
		tab.addEventListener("click", function () {
			const target = this.getAttribute("data-target");
			tabContents.forEach(function (content) {
				if (content.id === target) {
					content.classList.add("active");
				} else {
					content.classList.remove("active");
				}
			});
		});
	});
});
