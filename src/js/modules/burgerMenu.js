function burgerMenu() {
    const burger = document.querySelector('.header-wrap__menu');
    const menu = document.querySelector('.nav');
        
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });
}

module.exports = burgerMenu;