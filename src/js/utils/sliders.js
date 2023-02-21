import { Swiper, Navigation } from "swiper";

const saleSliders = document.querySelectorAll('.sale__slider .swiper-slide');

if (saleSliders.length) {
    new Swiper('.sale__slider .swiper', {
        modules: [
            Navigation
        ],
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            prevEl: '.sale__slider-prev',
            nextEl: '.sale__slider-next',
        },
        breakpoints: {
            300: {
                spaceBetween: 30,
            },

            769: {
                spaceBetween: 40,
            }
        }
    })
}

const doneSliders = document.querySelectorAll('.done__slider .swiper-slide');

if (saleSliders.length) {
    new Swiper('.done__slider .swiper', {
        modules: [
            Navigation
        ],
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            prevEl: '.done__slider-prev',
            nextEl: '.done__slider-next',
        },
        breakpoints: {
            300: {
                spaceBetween: 30,
            },

            769: {
                spaceBetween: 40,
            }
        }
    })
}

const objectSlides = document.querySelectorAll('.object__media-slider .swiper-slide');

if (objectSlides.length) {
    new Swiper('.object__media-slider .swiper', {
        modules: [
            Navigation
        ],
        slidesPerView: 'auto',
        navigation: {
            prevEl: '.object__media-prev',
            nextEl: '.object__media-next',
        },
        breakpoints: {
            300: {
                spaceBetween: 7,
            },

            769: {
                spaceBetween: 10,
            }
        }
    })

    const bigImage = document.querySelector('.object__media-big img');
    objectSlides.forEach(slide => {
        const img = slide.querySelector('img');

        img.addEventListener('click', function () {
            bigImage.src = img.src;
        })
    })
}