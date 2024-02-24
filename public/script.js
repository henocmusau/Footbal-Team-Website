
const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('intersecting')
            console.log('instersecting...')
            observer.unobserve(entry.target)
        }
    }
}, { threshold: 0.7 })

document.querySelectorAll('.observer').forEach(entry => {
    observer.observe(entry)
})