window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navigation")
    const card = document.querySelector(".card")

    nav.classList.toggle("show-nav", window.scrollY > window.innerHeight)
    card.classList.toggle("show-card", window.scrollY > 400)
})