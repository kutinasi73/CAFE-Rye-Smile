/* ハンバーガー */
function toggleMenu() { 
    const menuBody = document.querySelector(".hamburger_body");
    const icon = document.querySelector(".hamburger_icon"); 
    const body = document.body;

    menuBody.classList.toggle("open"); 
    icon.classList.toggle("open"); 
    body.classList.toggle("no-scroll");
}

// --- FVスライダー用 ---
const fvSlider = document.querySelector('.fv__slider');
const fvDots = document.querySelectorAll('.fv__dot');
let fvIndex = 0;

function updateFv() {
    if (!fvSlider || fvDots.length === 0) return; // 要素がない時は何もしない
    fvSlider.style.transform = `translateX(-${fvIndex * 25}%)`;
    fvDots.forEach(dot => dot.classList.remove('active'));
    if (fvDots[fvIndex]) fvDots[fvIndex].classList.add('active');
}

setInterval(() => {
    if (fvSlider) {
        fvIndex = (fvIndex + 1) % 4;
        updateFv();
    }
}, 5000);

function fvMove(n) { fvIndex = n; updateFv(); }

// --- Aboutスライダー用 ---
const aboutSlider = document.querySelector('.about__slider');
const aboutDots = document.querySelectorAll('.about__dot');
let aboutIndex = 0;

function updateAbout() {
    if (!aboutSlider || aboutDots.length === 0) return;
    aboutSlider.style.transform = `translateX(-${aboutIndex * 25}%)`;
    aboutDots.forEach(dot => dot.classList.remove('active'));
    if (aboutDots[aboutIndex]) aboutDots[aboutIndex].classList.add('active');
}

setInterval(() => {
    if (aboutSlider) {
        aboutIndex = (aboutIndex + 1) % 4;
        updateAbout();
    }
}, 4000);

function aboutMove(n) { aboutIndex = n; updateAbout(); }


// ニュースのアコーディオン
const accordions = document.querySelectorAll(".news__accordion");

accordions.forEach((acc) => {
    const btn = acc.querySelector("button");
    btn.addEventListener("click", () => {
        acc.classList.toggle("active");
    });
});