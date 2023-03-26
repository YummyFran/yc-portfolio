window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navigation")
    const card = document.querySelectorAll(".card")
    
    nav.classList.toggle("show-nav", window.scrollY > window.innerHeight)
    card.forEach(el => el.classList.toggle("show-card", window.scrollY > 400))
})

// let typed = new Typed("#name", {
//     strings: ["Yummy Fran", "Crismark"],
//     typeSpeed: 50,
//     backSpeed: 50,
//     loop: true
// })

// let header = document.getElementById("home")
// let changeBackground = () => {
//     setTimeout(() => {
//         header.style.backgroundImage = `url('../assets/crismark.jpg')`
//         console.log("1st")
    
//         setTimeout(() => {
//             header.style.backgroundImage = `url('../assets/banner.jpg')`
//             console.log("2nd")
//             requestAnimationFrame(changeBackground)
//         }, 2050)
//     }, 2350)
// }

// requestAnimationFrame(changeBackground)