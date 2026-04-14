(function () {
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const overlay = document.getElementById("overlay");

function openMenu() {
    navLinks.classList.add("active");
    overlay.classList.add("active");
    hamburger.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.classList.remove("menu-open");
}

/* toggle klik hamburger */
hamburger.addEventListener("click", () => {
    if (navLinks.classList.contains("active")) {
        closeMenu();
    } else {
        openMenu();
    }
});

/* klik overlay = close */
overlay.addEventListener("click", closeMenu);

/* klik link = close */
document.querySelectorAll(".navlinks").forEach(link => {
    link.addEventListener("click", closeMenu);
});

/* tekan ESC = close */
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
});
})();