import inputmask from "inputmask/dist/inputmask.es6.js";

inputmask({
    mask: "+7 (999) 999-99-99",
    greedy: false,
    clearIncomplete: true,
    showMaskOnHover: true,
}).mask('._phone');



// клики
document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_submit')) {
        const formType = targetEl.dataset.type;
        document.querySelector(`.popup__form[data-type="${formType}"]`).classList.add('_open');

        if (targetEl.closest('.list-poslelok li')) {
            const input = document.querySelector(`.popup__form[data-type="${formType}"]`).querySelector(`input[name="type"]`)
            input.value = 'Поселок ' + document.querySelector('h1').textContent + ' ' + targetEl.closest('li').querySelector('.plot-number').textContent;
        }
    }


    if (targetEl.classList.contains('popup__form-body') || targetEl.classList.contains('popup__form-close')) {
        const output = targetEl.closest('.popup__form').querySelector('.wpcf7-response-output');
        if (output) output.classList.add('_close');

        targetEl.closest('.popup__form').classList.remove('_open')
    }

    if (targetEl.classList.contains('plan__popup-close')) {
        targetEl.closest('.plan__popup').classList.remove('_open')
    }
})



// собития формы
document.addEventListener('wpcf7submit', function (event) {
    const inputs = event.detail.inputs
    const form = event.target;

    form.querySelector('.wpcf7-response-output').classList.remove('_close');

    inputs.forEach(inp => {
        if (inp.name == 'your-name' && inp.value == '') {
            const input = form.querySelector(`input[name="${inp.name}"]`)
            input.style.boxShadow = '0px 0px 0px 1px red';
        }
        else if (inp.name == 'your-phone' && inp.value.length < 18) {
            form.querySelector(`input[name="${inp.name}"]`).style.boxShadow = '0px 0px 0px 1px red';
        }
    })

}, false);



// инпуты
const inputs = document.querySelectorAll('.wpcf7 form input');
if (inputs.length) {
    inputs.forEach(inp => {
        inp.addEventListener('input', () => {

            if (inp.getAttribute('name') == 'your-name') {
                if (inp.value != '') {
                    inp.style.boxShadow = 'none';
                }
                else {
                    inp.style.boxShadow = '0px 0px 0px 1px red';
                }
            }
            else if (inp.getAttribute('name') == 'your-phone') {
                if (/[_]/.test(inp.value) || inp.value.length < 18) {
                    inp.style.boxShadow = '0px 0px 0px 1px red';
                }
                else {
                    inp.style.boxShadow = 'none';

                }
            }
        })

        if (inp.getAttribute('name') == 'type') {

            if (document.querySelector('.single-poselki')) {
                inp.value = 'Поселок ' + document.querySelector('h1').textContent;
            }

            if (document.querySelector('.single-kvartiri')) {
                inp.value = document.querySelector('h1').textContent + ' ' + document.querySelector('.region-name').textContent;
            }

            if (document.querySelector('.single-kottedji')) {
                inp.value = document.querySelector('h1').textContent + ' ' + document.querySelector('.region-name').textContent;
            }
        }
    })
}


// оутпут форм
const outputs = document.querySelectorAll('.wpcf7-response-output');
if (outputs.length) {
    outputs.forEach(out => {
        out.addEventListener('click', () => {
            out.classList.add('_close');
        })
    })
}   