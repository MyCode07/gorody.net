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



const toTop = document.querySelector('.to-top ');
if (toTop) {
    toTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(0, 0);
    })
}

function showToTop() {
    if (window.scrollY > 1000) {
        toTop.classList.add('_active');
    }
    else {
        toTop.classList.remove('_active');
    }
}

showToTop();
window.addEventListener('scroll', showToTop);