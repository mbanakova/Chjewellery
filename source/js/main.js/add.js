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
