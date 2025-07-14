function main() {

    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector(".header");
    const backgroundOpacity = document.querySelector(".nav__background-opacity");
    const navLinks = document.querySelector(".nav__links");
    const btnLink = document.querySelectorAll(".nav__link");

    /* Muestra / oculta el menú
    Muestra / oculta la opacidad */
    function collpaseAndOpacity() {
        backgroundOpacity.classList.toggle("disable");
        navLinks.classList.toggle("collapse");
        
    };
    
    // Anima el ícono del menú cuando se presiona
    function hamburgerAnimation() {
        hamburger.classList.toggle("is-active");
    };
    

    // Cuando se presione el botón de menú...
    hamburger.addEventListener("click", function () {
        hamburgerAnimation();
        collpaseAndOpacity();
    });

    // Cierra el menú cuando se presiona un link
    btnLink.forEach((elem) => {
        elem.addEventListener("click", () => {
            collpaseAndOpacity();
            hamburgerAnimation();
        });
    });

    // Cambia el background del header cuando se hace scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 500) {
            header.classList.add("background-active");
        } else {
            header.classList.remove("background-active");
        };
    });
};

main();