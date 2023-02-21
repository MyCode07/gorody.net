const header = document.querySelector('.header');


function scrollheader() {
    const height = header.getBoundingClientRect().height;
    if (window.scrollY > height) {
        header.classList.add('_scroll');
    }
    else {
        header.classList.remove('_scroll');
    }
}

scrollheader();
window.addEventListener('scroll', scrollheader);