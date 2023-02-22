const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src
        }
    })
})

const previews = document.querySelectorAll('.preview');
if (previews.length) {
    previews.forEach(img => {
        observer.observe(img)
    })
}