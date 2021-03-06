"use strict";
(function () {
    // add to cart modal
    let addBtn = document.querySelector(".jewel__add-link");
    let addModal = document.querySelector(".add");

    if (addBtn) {
        addBtn.addEventListener("click", (event) => {
            event.preventDefault();
            addModal.classList.add("add--open");
        });
    }

    if (addModal) {
        let overlay = document.querySelector(".add__overlay");
        let closeBtn = document.querySelector("#add-close");
        // закрыть через Esc
        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                if (addModal.classList.contains("add--open")) {
                    event.preventDefault();
                    addModal.classList.remove("add--open");
                }
            }
        });
        // Закрыть по клику снаружи
        overlay.addEventListener("click", (elem) => {
            if (elem.target === overlay && elem.target !== addModal) {
                addModal.classList.remove("add--open");
            }
        });

        // закрыть крестиком
        closeBtn.addEventListener("click", () => {
            addModal.classList.remove("add--open");
        });
    }
})();

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

"use strict";
(function () {
    // login modal
    let loginBtn = document.querySelectorAll(".js-login");
    let loginModal = document.querySelector(".login");
    let storageEmail = "";
    let email = document.querySelector("#user-email");
    let isStorageSupport = true;

    if (loginBtn) {
        loginBtn.forEach((btn) => {
            btn.addEventListener("click", (event) => {
                event.preventDefault();
                loginModal.classList.add("login--open");

                if (storageEmail) {
                    if (email) {
                        email.value = storageEmail;
                    }
                } else {
                    email.focus();
                }
            });
        });
    }

    if (loginModal) {
        let overlay = document.querySelector(".login__overlay");
        let closeBtn = document.querySelector("#login-close");
        let loginForm = document.querySelector(".modal-form");

        try {
            storageEmail = localStorage.getItem("email");
        } catch (err) {
            isStorageSupport = false;
        }

        // закрыть через Esc
        window.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                if (loginModal.classList.contains("login--open")) {
                    event.preventDefault();
                    loginModal.classList.remove("login--open");
                    window.onscroll = function () {};
                }
            }
        });

        // Закрыть по клику снаружи
        overlay.addEventListener("click", (elem) => {
            if (elem.target === overlay && elem.target !== loginModal) {
                loginModal.classList.remove("login--open");

                window.onscroll = function () {};
            }
        });

        // закрыть крестиком
        closeBtn.addEventListener("click", () => {
            loginModal.classList.remove("login--open");
            window.onscroll = function () {};
        });

        // запись email при отправке
        if (loginForm) {
            loginForm.addEventListener("submit", () => {
                if (isStorageSupport) {
                    localStorage.setItem("email", email.value);
                }
            });
        }
    }
})();

"use strict";
(function () {
    let burger = document.querySelector(".header__burger");
    let header = document.querySelector("header");

    if (header) {
        document.querySelector(".header").classList.add("header--js");
        document.querySelector(".header").classList.add("header--close");

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
    }
})();

"use strict";
(function () {
    /// swiper
    // import Swiper from "swiper/bundle";
    // const Swiper = require("swiper/bundle");
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
