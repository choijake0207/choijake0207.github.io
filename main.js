document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible")
            } 
        })
    })
    const hiddenEl = document.querySelectorAll(".hidden")
    hiddenEl.forEach((el) => observer.observe(el))
})