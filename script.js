window.addEventListener('scroll', function() {
    let navbar = document.getElementById("menu-bar");
    if (window.pageYOffset >= 170) {
        // console.log("ok");
        navbar.classList.add('sticky');

    } else {
        navbar.classList.remove('sticky');
    }
});