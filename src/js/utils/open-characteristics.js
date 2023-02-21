const openCharacteristicsBtn = document.querySelector('.open-characteristics');
const sidebar = document.querySelector('.main__sidebar');

if (openCharacteristicsBtn) {
    openCharacteristicsBtn.addEventListener('click', () => {
        sidebar.classList.toggle('_open');
        if (sidebar.classList.contains('_open')) {
            openCharacteristicsBtn.innerHTML = openCharacteristicsBtn.dataset.close
        }
        else {
            openCharacteristicsBtn.innerHTML = openCharacteristicsBtn.dataset.open
        }
    })
}
