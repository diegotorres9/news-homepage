// For Menu(Hamnurger) Icon
var menuIcon = document.getElementById("hamburger-menu-icon");
var closeIcon = document.getElementById("close-menu-icon");
var overlay = document.getElementById("overlay");
var mobileMenu = document.getElementById("mobile-menu");

document.addEventListener('click', function(event) {
    if(event.target.closest('.hamburger-menu-icon')) {
        menuIcon.style.display = 'none';
        mobileMenu.style.display = 'flex'
        mobileMenu.style.flexDirection = 'column'
        closeIcon.style.display = 'block';
        overlay.style.display = 'block'
    } else {
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
        mobileMenu.style.display = 'none';
        overlay.style.display = 'none';
    }
});