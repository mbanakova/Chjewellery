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

    /// swper

    let swiper = new Swiper(".swiper-container", {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 30,
        speed: 1000,
        freeMode: true,
        autoHeight: true,
        watchSlidesVisibility: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return (
                    '<span class="' + className + '">' + (index + 1) + "</span>"
                );
            },
        },
        lazy: {
            loadPrevNext: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                pagination: {
                    type: `fraction`,
                    renderFraction(currentClass, totalClass, index, total) {
                        return (
                            `<span class="` +
                            currentClass +
                            `"type="button">0 ` +
                            index +
                            ` </span>` +
                            ` of ` +
                            `<span class="` +
                            totalClass +
                            `"type="button">0 ` +
                            total +
                            ` </span>`
                        );
                    },
                },
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                pagination: {
                    type: `bullets`,
                },
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                pagination: {
                    type: `bullets`,
                },
            },
        },
    });
})();

let filter = document.querySelector(".filter");
let filterToggle = document.querySelector(".catalog__button");

if (filter) {
    filter.classList.add("filter--js");
    filterToggle.addEventListener("click", () => {
        filter.classList.remove("filter--js");
    });
}

///tabs

let tabs = document.querySelectorAll(".tabs__triggers-item");
let bigImage = document.querySelector(".tabs__content");

tabs.forEach((tab) => {
    tab.addEventListener("click", (event) => {
        console.log(event.target);
        event.preventDefault();

        tabs.forEach((elem) =>
            elem.classList.remove("tabs__triggers-item--active")
        );

        bigImage.src = event.target.src;
        bigImage.srcset = event.target.srcset;

        tab.classList.add("tabs__triggers-item--active");
    });
});
