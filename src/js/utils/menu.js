const burger = document.querySelector('.header__burger');
const body = document.body;

if (burger) {
    const menu = document.querySelector('.menu');
    const menuClose = document.querySelector('.menu__close');

    burger.addEventListener('click', function () {
        menu.classList.add('_open')
        body.classList.add('_noscroll')
    })

    menuClose.addEventListener('click', function () {
        menu.classList.remove('_open')
        body.classList.remove('_noscroll')
    })

    const links = document.querySelectorAll('.menu__list nav a');
    if (links.length) {
        if (document.querySelector('.sale') || document.querySelector('.done')) {
            links.forEach(link => {
                link.addEventListener('click', function () {
                    menu.classList.remove('_open')
                    body.classList.remove('_noscroll')
                })
            })
        }
    }
}

