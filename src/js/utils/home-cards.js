import {isMobile} from './isMobile.js'

const projects = document.querySelectorAll('.sale__slider article');

if (projects.length) {
    projects.forEach(project => {
        const buttons = project.querySelectorAll('button');

        if (buttons.length && isMobile.any()) {
            buttons.forEach(button => {
                button.addEventListener('click', function () {

                    if (!this.hasAttribute('data-open')) {

                        if (document.querySelector('.sale__slider article button[data-open]')) {
                            document.querySelector('.sale__slider article button[data-open]').classList.remove('_open')

                            document.querySelector('.sale__slider article button[data-open]').removeAttribute('data-open')
                        }

                        buttons.forEach(item => {
                            item.classList.remove('_open')
                        })

                        this.classList.add('_open')  
                        this.setAttribute('data-open', 'open')
                    }
                    else {
                        this.classList.remove('_open')
                        this.removeAttribute('data-open')
                    }
                })
            })
        }  
    })
}