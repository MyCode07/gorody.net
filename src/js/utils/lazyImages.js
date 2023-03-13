const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
        }
    })
})

const images = document.querySelectorAll('img.lazyload');
if (images.length) {
    images.forEach(img => {
        observer.observe(img)
    })
}