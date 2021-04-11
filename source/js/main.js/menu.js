"use strict";
(function () {
    document.querySelector(".header").classList.add("header--js");
    document.querySelector(".header").classList.add("header--close");
    let burger = document.querySelector(".header__burger");
    let header = document.querySelector("header");

    if (burger) {
        burger.addEventListener("click", () => {
            header.classList.toggle("header--close");
        });
    }

    let items = document.querySelectorAll(".faq__item");

    if (items.length > 0) {
        items.forEach((item) => {
            item.addEventListener("click", () => {
                const title = item.querySelector("h3");
                const height = title.nextElementSibling.scrollHeight;
                title.classList.toggle("active");
                if (title.classList.contains("active")) {
                    title.nextElementSibling.style.maxHeight = `${height}px`;
                } else {
                    title.nextElementSibling.style.maxHeight = 0;
                }
            });
        });
    }
})();
