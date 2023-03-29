window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navigation")
    const card = document.querySelectorAll(".card")
    
    nav.classList.toggle("show-nav", window.scrollY > window.innerHeight)
    card.forEach(el => el.classList.toggle("show-card", window.scrollY > 400))
})