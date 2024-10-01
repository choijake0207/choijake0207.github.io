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

const resumeContainer = document.querySelector(".resume-overlay")
const viewResumeBtn = document.querySelector(".view-resume-btn")
viewResumeBtn.addEventListener("click", () => {
    resumeContainer.classList.remove("none")
    document.body.style.overflowY = "hidden"
    
})
const closeResumeBtn = document.querySelector(".close-resume-btn")
closeResumeBtn.addEventListener("click", () => {
    resumeContainer.classList.add("none")
    document.body.style.overflowY = "scroll"
})
