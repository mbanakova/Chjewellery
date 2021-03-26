document.querySelector(".header").classList.remove("header--nojs");
let burger = document.querySelector(".header__burger");
let header = document.querySelector("header");

burger.addEventListener("click", () => {
    header.classList.toggle("header--close");
});
