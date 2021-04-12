"use strict";
(function () {
    // filter
    let filter = document.querySelector(".catalog__filter-wrap");
    let filterToggle = document.querySelector(".catalog__button");
    let filterClose = document.querySelector(".filter__close");

    if (filter) {
        filter.classList.add("catalog__filter-wrap--js");
    }
    if (filterToggle) {
        filterToggle.addEventListener("click", () => {
            filter.classList.toggle("catalog__filter-wrap--open");
            filter.classList.toggle("catalog__filter-wrap--js");
        });
    }

    if (filterClose) {
        filterClose.addEventListener("click", () => {
            filter.classList.remove("catalog__filter-wrap--open");
            filter.classList.add("catalog__filter-wrap--js");
        });
    }
})();
