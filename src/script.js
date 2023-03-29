window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navigation")
    const card = document.querySelectorAll(".card")
    const project = document.querySelector(".project-container")
    const contact = document.querySelector(".contact-container")
    
    nav.classList.toggle("show-nav", window.scrollY > window.innerHeight)
    card.forEach(el => el.classList.toggle("show-card", window.scrollY > 400))
    project.classList.toggle("show-project", window.scrollY > (window.innerHeight + 400))
    contact.classList.toggle("show-contact", window.scrollY > (2 * window.innerHeight + 400))
})