import inputmask from "inputmask/dist/inputmask.es6.js";

inputmask({
    mask: "(999) 999-9999",
    greedy: false,
    clearIncomplete: true,
    showMaskOnHover: true,
}).mask('._phone');

document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_submit')) {
        const formType = targetEl.dataset.type;
        document.querySelector(`.popup__form[data-type="${formType}"]`).classList.add('_open');
    }


    if (targetEl.classList.contains('popup__form-body') || targetEl.classList.contains('popup__form-close')) {
        targetEl.closest('.popup__form').classList.remove('_open')
    }
})