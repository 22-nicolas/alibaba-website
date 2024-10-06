const header = document.querySelector(".header");
const body = document.getElementById("body")

let lastScrollY = 0;
let scrollingUp = false;
let scrollingDown = false;

window.addEventListener("scroll", () => {
    if(window.scrollY == 0) {
        header.classList.remove("header-fixed");
        body.classList.remove("body-header-fixed");
    }
    if(window.scrollY > 145 && lastScrollY > window.scrollY && !scrollingUp) {
        scrollingUp = true;
        scrollingDown = false;
        header.classList.add("header-animation")
        setTimeout(() => {
            body.classList.add("body-header-fixed");
            header.classList.add("header-fixed");
        }, 0);
        setTimeout(() => {
            header.classList.remove("header-animation");
        }, 200);
    }
    if(window.scrollY > 145 && lastScrollY < window.scrollY && !scrollingDown){
        scrollingDown = true;
        scrollingUp = false;
        header.classList.add("header-animation");
        setTimeout(() => {
            header.classList.remove("header-fixed");
            body.classList.remove("body-header-fixed");
            header.classList.remove("header-animation");
        }, 200);
    }

    lastScrollY = window.scrollY;
});