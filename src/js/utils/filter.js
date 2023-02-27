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
    })

    resetFilter.addEventListener('click', function () {
        filter.classList.remove('_result')
        filter.classList.remove('_noresult')
    })
}