let header = document.querySelector("header");
window.addEventListener("scroll", function () {
    if (this.scrollY >= 600) {
        header.classList.add("shadow");
    } else {
        header.classList.remove("shadow");
    }
});

let menu = document.querySelector(".nav-menu");
let toggle = document.querySelector(".menu-toggle");
toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    if (menu.classList.contains("open")) {
        toggle.innerHTML = `<i class="fa-solid fa-xmark fa-fw"></i>`;
        toggle.style.rotate = "180deg";
    } else {
        toggle.innerHTML = `<i class="fa-solid fa-bars fa-fw"></i>`;
        toggle.style.rotate = "0deg";
    }
});

let card = document.querySelector(".card-menu");
let close = document.querySelector(".card-menu .close-icon");
let cartIcon = document.querySelector(".cart");

cartIcon.addEventListener("click", function () {
    card.classList.add("switch");
});
close.addEventListener("click", () => {
    card.classList.remove("switch");
});

let form = document.querySelector(".form");
let closed = document.querySelector(".form .close-icon");
let userIcon = document.querySelector(".user");

userIcon.addEventListener("click", function () {
    form.classList.add("switched");
});
closed.addEventListener("click", () => {
    form.classList.remove("switched");
});

let login = document.querySelector(".login");
let register = document.querySelector(".register");
let loginBtn = document.querySelector(".log");
let registerBtn = document.querySelector(".reg");

registerBtn.addEventListener("click", function () {
    login.classList.add("none");
    registerBtn.style.backgroundColor = "#ce962e";
    loginBtn.style.backgroundColor = "#1f232a";
    register.classList.add("block");
});

loginBtn.addEventListener("click", function () {
    login.classList.remove("none");
    registerBtn.style.backgroundColor = "#1f232a";
    loginBtn.style.backgroundColor = "#ce962e";
    register.classList.remove("block");
});

let tabs = Array.from(document.querySelectorAll(".tabs li"));
let divs = Array.from(document.querySelectorAll(".product-box"));

tabs.forEach((tab) => {
    tab.addEventListener("click", function (e) {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        e.target.classList.add("active");
        divs.forEach((div) => {
            div.style.display = "none";
        });
        document.querySelectorAll(e.target.dataset.cat).forEach((ele) => {
            ele.style.display = "block";
        });
    });
});

// let section = document.querySelector(".contact");
// let links = document.querySelectorAll(".nav-menu .nav-link");

// window.onscroll = function () {
//     links.forEach((link) => {
//         link.classList.remove("actived");
//         if (window.scrollY >= section.offsetTop) {
//             link.classList.add("actived");
//         }
//     })
// }

lightGallery(document.querySelector(".products .container"));

let progress = document.querySelector(".progress");
let progressSpans = document.querySelectorAll(".span");

window.addEventListener("scroll", () => {
    if (this.scrollY >= progress.offsetTop) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.prog; 
        })
    }
});

let counterSection = document.querySelector(".counters");
let heads = document.querySelectorAll(".counters .counter h3");
let started = false;

window.addEventListener("scroll", () => {
    if (this.scrollY >= counterSection.offsetTop - 400) {
       if (!started) {
        heads.forEach((head) => startCount(head));
       }
       started = true;
    };
});

function startCount(el) {
    let count = el.dataset.count;
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == count) {
            clearInterval(counter);
        }
    }, 2000 / count);
};

const swiper = new Swiper(".swip", {
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
});

const swip = new Swiper(".team-slider", {
    spaceBetween: 20,
    centeredSliders: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
 });