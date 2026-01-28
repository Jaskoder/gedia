const serviceBoxes = document.querySelectorAll(".service-box");
const skillsBoxes = document.querySelectorAll(".skill-box");
const skillsBars = document.querySelectorAll(".bar");
const portfolioBoxes = document.querySelectorAll(".portfolio-box");
const toogleButton = document.querySelector("#toogle-button");
const navBar = document.querySelector("nav");
const aboutImage = document.querySelector(".about img");
const aboutDescription = document.querySelector(".about-description");
const personals = document.querySelector('.personals');
const words = document.querySelector('.words');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function isInViewportTop(element) {
    const rect = element.getBoundingClientRect();

    return rect.top < (window.innerHeight/1.5);
}

function toogleNavbar() {
    if( navBar.style.left === "-100%") {
        navBar.style.left = "0";
        toogleButton.innerHTML = '<i class="bi bi-x"></i>';
    } else {
        navBar.style.left = "-100%";
        toogleButton.innerHTML = '<i class="bi bi-list"></i>';
    }
}

function displayWords() {
    const wordsText = words.dataset.words.split("  ");
    let index = 0;

    setInterval(() => {
        index++;
        if(index < 0) {
            index = wordsText.length - 1;
        }
        if(index >= wordsText.length) {
            index = 0
        }

        words.textContent = wordsText[index];
    }, 3000);
}

window.addEventListener("scroll", () => {
    [...serviceBoxes, ...skillsBoxes, ...portfolioBoxes].forEach((box) => {
        if(isInViewport(box)) {
            box.classList.add("appear-animation")
        }
    });

    [...skillsBars].forEach((bar) => {
        if(isInViewport(bar)) {
            bar.classList.add('bar-progression')
        }
    });

    [aboutImage, aboutDescription, personals].forEach((div) => {
        if(isInViewportTop(div)) {
            div.classList.add('slide-animation')
        }
    })

});

window.addEventListener("DOMContentLoaded", () => {
    toogleButton.addEventListener("click", toogleNavbar);

    displayWords()
});
