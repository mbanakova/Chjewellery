"use strict";
(function () {
    /// swiper
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
                return `<span class="${className}">${index + 1}</span>`;
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
                        return `<span class="${currentClass}" type="button">0${index}</span> of <span class="${totalClass}" type="button">0${total}</span>`;
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
