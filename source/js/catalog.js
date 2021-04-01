"use strict";
(function () {
    document.querySelector(".header").classList.add("header--js");
    document.querySelector(".header").classList.add("header--close");
    let burger = document.querySelector(".header__burger");
    let header = document.querySelector("header");

    burger.addEventListener("click", () => {
        header.classList.toggle("header--close");
    });

    let items = document.querySelectorAll(".faq__item");

    items.forEach((item) => {
        item.addEventListener("click", () => {
            const title = item.querySelector("h3");
            console.log(title);
            const height = title.nextElementSibling.scrollHeight;
            title.classList.toggle("active");
            if (title.classList.contains("active")) {
                title.nextElementSibling.style.maxHeight = `${height}px`;
            } else {
                title.nextElementSibling.style.maxHeight = 0;
            }
        });
    });

    let filter = document.querySelector(".catalog__filter-wrap");
    let filterToggle = document.querySelector(".catalog__button");
    let filterClose = document.querySelector(".filter__close");

    filter.classList.add("catalog__filter-wrap--js");

    filterToggle.addEventListener("click", () => {
        filter.classList.toggle("catalog__filter-wrap--open");
        filter.classList.toggle("catalog__filter-wrap--js");
    });

    filterClose.addEventListener("click", () => {
        filter.classList.remove("catalog__filter-wrap--open");
        filter.classList.add("catalog__filter-wrap--js");
    });
})();
