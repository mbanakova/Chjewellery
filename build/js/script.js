"use strict";

document.querySelector(".header").classList.remove("header--nojs");
let burger = document.querySelector(".header__burger");
let header = document.querySelector("header");
burger.addEventListener("click", () => {
  header.classList.toggle("header--close");
});
let items = document.querySelectorAll(".faq__item");
items.forEach(item => {
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
//# sourceMappingURL=script.js.map
