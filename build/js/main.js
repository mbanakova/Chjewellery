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

// setTimeout(
//     init2slider(
//         "range-box",
//         "range-ruler",
//         "range-left-button",
//         "range-right-button",
//         "range-left-cell",
//         "range-right-cell"
//     ),
//     0
// );

// function init2slider(idX, btwX, btn1X, btn2X, input1, input2) {
//     var slider = document.getElementById(idX);
//     var between = document.getElementById(btwX);
//     var button1 = document.getElementById(btn1X);
//     var button2 = document.getElementById(btn2X);
//     console.log(inpt1);
//     var inpt1 = document.getElementById(input1);
//     var inpt2 = document.getElementById(input2);

//     var min = inpt1.min;
//     var max = inpt1.max;

//     /*init*/
//     var sliderCoords = getCoords(slider);
//     button1.style.marginLeft = "0px";
//     button2.style.marginLeft = slider.offsetWidth - button1.offsetWidth + "px";
//     between.style.width = slider.offsetWidth - button1.offsetWidth + "px";
//     inpt1.value = min;
//     inpt2.value = max;

//     inpt1.onchange = function (evt) {
//         if (parseInt(inpt1.value) < min) inpt1.value = min;
//         if (parseInt(inpt1.value) > max) inpt1.value = max;
//         if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
//             var temp = inpt1.value;
//             inpt1.value = inpt2.value;
//             inpt2.value = temp;
//         }

//         var sliderCoords = getCoords(slider);
//         var per1 = (parseInt(inpt1.value - min) * 100) / (max - min);
//         var per2 = (parseInt(inpt2.value - min) * 100) / (max - min);
//         var left1 = (per1 * (slider.offsetWidth - button1.offsetWidth)) / 100;
//         var left2 = (per2 * (slider.offsetWidth - button1.offsetWidth)) / 100;

//         button1.style.marginLeft = left1 + "px";
//         button2.style.marginLeft = left2 + "px";

//         if (left1 > left2) {
//             between.style.width = left1 - left2 + "px";
//             between.style.marginLeft = left2 + "px";
//         } else {
//             between.style.width = left2 - left1 + "px";
//             between.style.marginLeft = left1 + "px";
//         }
//     };
//     inpt2.onchange = function (evt) {
//         if (parseInt(inpt2.value) < min) inpt2.value = min;
//         if (parseInt(inpt2.value) > max) inpt2.value = max;
//         if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
//             var temp = inpt1.value;
//             inpt1.value = inpt2.value;
//             inpt2.value = temp;
//         }

//         var sliderCoords = getCoords(slider);
//         var per1 = (parseInt(inpt1.value - min) * 100) / (max - min);
//         var per2 = (parseInt(inpt2.value - min) * 100) / (max - min);
//         var left1 = (per1 * (slider.offsetWidth - button1.offsetWidth)) / 100;
//         var left2 = (per2 * (slider.offsetWidth - button1.offsetWidth)) / 100;

//         button1.style.marginLeft = left1 + "px";
//         button2.style.marginLeft = left2 + "px";

//         if (left1 > left2) {
//             between.style.width = left1 - left2 + "px";
//             between.style.marginLeft = left2 + "px";
//         } else {
//             between.style.width = left2 - left1 + "px";
//             between.style.marginLeft = left1 + "px";
//         }
//     };

//     /*mouse*/
//     button1.onmousedown = function (evt) {
//         var sliderCoords = getCoords(slider);
//         var betweenCoords = getCoords(between);
//         var buttonCoords1 = getCoords(button1);
//         var buttonCoords2 = getCoords(button2);
//         var shiftX2 = evt.pageX - buttonCoords2.left;
//         var shiftX1 = evt.pageX - buttonCoords1.left;

//         document.onmousemove = function (evt) {
//             var left1 = evt.pageX - shiftX1 - sliderCoords.left;
//             var right1 = slider.offsetWidth - button1.offsetWidth;
//             if (left1 < 0) left1 = 0;
//             if (left1 > right1) left1 = right1;
//             button1.style.marginLeft = left1 + "px";

//             shiftX2 = evt.pageX - buttonCoords2.left;
//             var left2 = evt.pageX - shiftX2 - sliderCoords.left;
//             var right2 = slider.offsetWidth - button2.offsetWidth;
//             if (left2 < 0) left2 = 0;
//             if (left2 > right2) left2 = right2;

//             var per_min = 0;
//             var per_max = 0;
//             if (left1 > left2) {
//                 between.style.width = left1 - left2 + "px";
//                 between.style.marginLeft = left2 + "px";

//                 per_min =
//                     (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
//                 per_max =
//                     (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
//             } else {
//                 between.style.width = left2 - left1 + "px";
//                 between.style.marginLeft = left1 + "px";

//                 per_min =
//                     (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
//                 per_max =
//                     (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
//             }
//             inpt1.value =
//                 parseInt(min) + Math.round(((max - min) * per_min) / 100);
//             inpt2.value =
//                 parseInt(min) + Math.round(((max - min) * per_max) / 100);
//         };
//         document.onmouseup = function () {
//             document.onmousemove = document.onmouseup = null;
//         };
//         return false;
//     };

//     button2.onmousedown = function (evt) {
//         var sliderCoords = getCoords(slider);
//         var betweenCoords = getCoords(between);
//         var buttonCoords1 = getCoords(button1);
//         var buttonCoords2 = getCoords(button2);
//         var shiftX2 = evt.pageX - buttonCoords2.left;
//         var shiftX1 = evt.pageX - buttonCoords1.left;

//         document.onmousemove = function (evt) {
//             var left2 = evt.pageX - shiftX2 - sliderCoords.left;
//             var right2 = slider.offsetWidth - button2.offsetWidth;
//             if (left2 < 0) left2 = 0;
//             if (left2 > right2) left2 = right2;
//             button2.style.marginLeft = left2 + "px";

//             shiftX1 = evt.pageX - buttonCoords1.left;
//             var left1 = evt.pageX - shiftX1 - sliderCoords.left;
//             var right1 = slider.offsetWidth - button1.offsetWidth;
//             if (left1 < 0) left1 = 0;
//             if (left1 > right1) left1 = right1;

//             var per_min = 0;
//             var per_max = 0;

//             if (left1 > left2) {
//                 between.style.width = left1 - left2 + "px";
//                 between.style.marginLeft = left2 + "px";
//                 per_min =
//                     (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
//                 per_max =
//                     (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
//             } else {
//                 between.style.width = left2 - left1 + "px";
//                 between.style.marginLeft = left1 + "px";
//                 per_min =
//                     (left1 * 100) / (slider.offsetWidth - button1.offsetWidth);
//                 per_max =
//                     (left2 * 100) / (slider.offsetWidth - button1.offsetWidth);
//             }
//             inpt1.value =
//                 parseInt(min) + Math.round(((max - min) * per_min) / 100);
//             inpt2.value =
//                 parseInt(min) + Math.round(((max - min) * per_max) / 100);
//         };
//         document.onmouseup = function () {
//             document.onmousemove = document.onmouseup = null;
//         };
//         return false;
//     };

//     button1.ondragstart = function () {
//         return false;
//     };
//     button2.ondragstart = function () {
//         return false;
//     };

//     function getCoords(elem) {
//         var box = elem.getBoundingClientRect();
//         return {
//             top: box.top + pageYOffset,
//             left: box.left + pageXOffset,
//         };
//     }
// }
