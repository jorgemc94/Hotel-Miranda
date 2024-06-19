const list = document.querySelector('.header__nav__list');
const icon = document.querySelectorAll('.header__nav__menu__icon');
const className = '--visible';

displayMenu = (list, icon, icon__toggle, className) => {
    list.classList.toggle(`${className}`);
    icon.classList.toggle(`${className}`);
    icon__toggle.classList.toggle(`${className}`);

}

document.querySelector('.header__nav__menu').addEventListener('click', (event) => {
    displayMenu(list, icon[0], icon[1], className);
});

