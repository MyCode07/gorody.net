// import { IonRangeSliderEvent, IonRangeSliderOptions } from 'ion-rangeslider'
// $("input[name='square-home']").ionRangeSlider();
// <input type="text" name="square-home" value="" data-type="double" data-step="1" data-min="5" data-max="100" data-from="5" data-to="100" data-grid="true" />

const openFilter = document.querySelector('.open-filter');

if (openFilter) {
    const filter = openFilter.closest('.filter');
    const filterSearch = filter.querySelector('.filter__seaech');
    const resetFilter = filter.querySelector('.filter__reset ')

    openFilter.addEventListener('click', function () {
        openFilter.classList.toggle('_open')
        filter.classList.toggle('_open')
    })

    filterSearch.addEventListener('click', function () {
        openFilter.classList.remove('_open')
        filter.classList.remove('_open')
        filter.classList.add('_result')
    })

    resetFilter.addEventListener('click', function () {
        filter.classList.remove('_result')
    })
}