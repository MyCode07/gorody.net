const genplanTabs = document.querySelectorAll('.genplan__navbar button[data-parts]');

if (genplanTabs.length) {
    genplanTabs.forEach(tab => {
        const part = tab.dataset.parts;
        const map = document.querySelector(`.plan__image-img[data-part="${part}"]`);

        tab.addEventListener('click', function () {
            const activeTab = document.querySelector('.genplan__navbar button._active');
            const activeMap = document.querySelector('.plan__image-img._active');
            if (activeTab) {
                activeTab.classList.remove('_active')
                activeMap.classList.remove('_active')
            }

            tab.classList.add('_active')
            map.classList.add('_active')
        })

        if (part != '0') {

            const mapPart = document.querySelector(`.partSale[data-partsale="${part}"]`);
            mapPart.addEventListener('click', function () {
                const activeTab = document.querySelector('.genplan__navbar button._active');
                const activeMap = document.querySelector('.plan__image-img._active');
                if (activeTab) {
                    activeTab.classList.remove('_active')
                    activeMap.classList.remove('_active')
                }

                tab.classList.add('_active')
                map.classList.add('_active')
            })
        }

    })
}