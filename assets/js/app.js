"use strict";

const menuInit = ( ) => {
	if (document.querySelector(".icon-menu")) {
		document.addEventListener("click", function (e) {
			if (e.target.closest('.icon-menu')) {
				document.documentElement.classList.toggle("menu-open");
        document.documentElement.classList.toggle("lock");
			}
		});
	};
};

menuInit();