/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (mobileMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* =========================================
   CLOSE MOBILE MENU AFTER CLICK
========================================= */

const mobileLinks = document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   SEARCH
========================================= */

const searchBtn = document.getElementById("searchBtn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");
const searchMessage = document.getElementById("searchMessage");


searchBtn.addEventListener("click", () => {

    searchOverlay.classList.add("show");

    setTimeout(() => {
        searchInput.focus();
    }, 200);

});


closeSearch.addEventListener("click", () => {

    searchOverlay.classList.remove("show");

});


searchOverlay.addEventListener("click", (event) => {

    if (event.target === searchOverlay) {
        searchOverlay.classList.remove("show");
    }

});


/* =========================================
   SEARCH FUNCTION
========================================= */

function performSearch() {

    const query = searchInput.value.trim();

    if (query === "") {

        searchMessage.textContent =
            "Please enter something to search.";

        return;
    }

    searchMessage.textContent =
        `Searching Purr Haven for "${query}"...`;

}


/* =========================================
   ENTER KEY FOR SEARCH
========================================= */

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        performSearch();
    }

});


/* =========================================
   NEWSLETTER
========================================= */

const newsletterForm =
    document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    if (email === "") {
        return;
    }

    alert(
        `Thank you for joining the Purr Haven community! 🐱\n\nWe'll send updates to ${email}.`
    );

    newsletterForm.reset();

});


/* =========================================
   EXPLORE BUTTON
========================================= */

function exploreNow() {

    document
        .querySelector(".categories-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


/* =========================================
   CATEGORY CARD INTERACTION
========================================= */

const cards =
    document.querySelectorAll(".category-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.cursor = "pointer";

    });

});


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        searchOverlay.classList.remove("show");

        mobileMenu.classList.remove("show");

    }

});