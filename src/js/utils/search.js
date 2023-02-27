document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('header__search')) {
        document.querySelector('.search__popup').classList.add('_open');
    }


    if (targetEl.classList.contains('search__body') || targetEl.classList.contains('search__close')) {
        targetEl.closest('.search').classList.remove('_open')
    }
})