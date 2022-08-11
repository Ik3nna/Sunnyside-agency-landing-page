const menu = document.querySelector(".hamburger-menu");

const wrapper = document.querySelector("#wrapper");

const navbar = document.querySelector(".navbar");

const toplink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        wrapper.classList.add("fixed-nav");
    } else {
        wrapper.classList.remove("fixed-nav");
    }

    if (scrollHeight > 500) {
       toplink.classList.add("show-link");
    } else {
        toplink.classList.remove("show-link");
    }

    if (wrapper.classList.contains("active")) {
        wrapper.classList.remove("fixed-nav");
        toplink.classList.remove("show-link");
    }
});

menu.addEventListener("click", function () {
    wrapper.classList.toggle("active");
});

