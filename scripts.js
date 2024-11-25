const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("menu-close-icon");
const mobileNav = document.getElementById("mobile-nav");

menuIcon.addEventListener("click", (e) => {
    // mobileNav.style.display = "block";
    mobileNav.classList.toggle("is-open");
    closeIcon.classList.toggle("is-open")
})
closeIcon.addEventListener("click", (e) => {
    // mobileNav.style.display = "none";
    mobileNav.classList.toggle("is-open");
    closeIcon.classList.toggle("is-open");
})