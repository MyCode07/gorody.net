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
const bigImageLink = document.querySelector('.object__media-big a');
const bigImage = bigImageLink.querySelector('img');

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
        },
        on: {
            slideChange: (swiper) => {
                const image = swiper.slides[swiper.activeIndex].querySelector('img');

                bigImage.src = image.dataset.src;
                bigImageLink.href = image.dataset.src;
            }
        }
    })
}