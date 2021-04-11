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
