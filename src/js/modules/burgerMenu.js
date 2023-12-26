function burgerMenu() {
    const burger = document.querySelector('.header-wrap__menu');
    const menu = document.querySelector('.nav');
        
    burger.onclick = function() {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    };
}

module.exports = burgerMenu;