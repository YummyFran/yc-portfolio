//simple events | nothing so complicated
//code from my previous project --> https://github.com/YummyFran/yummy-fran-portfolio-reactjs/blob/master/src/App.js

//DOM Elements
const nav = document.querySelector(".navigation")
const card = document.querySelectorAll(".card")
const project = document.querySelector(".project-container")
const contact = document.querySelector(".contact-container")
const clickables = document.getElementsByClassName('pointer')
const cursor = document.querySelector('.cursor')

window.addEventListener("scroll", () => {   //onScroll Event
    nav.classList.toggle("show-nav", window.scrollY > window.innerHeight)
    card.forEach(el => el.classList.toggle("show-card", window.scrollY > 400))
    project.classList.toggle("show-project", window.scrollY > (window.innerHeight + 400))
    contact.classList.toggle("show-contact", window.scrollY > (2 * window.innerHeight + 400))
})

document.addEventListener('mousemove', e => {   //onMouseMove Event
    cursor.style.left = e.clientX + 'px'
    cursor.style.top = e.clientY + 'px'
})

document.addEventListener('click', e => { //onClick Event
    cursor.classList.add('clicked')
    setTimeout(() => cursor.classList.remove('clicked'), 600)
})

for(let i = 0; i < clickables.length; i++) {    //onHover(React) on onmouseover/onmouseout(Vanilla)
    clickables[i].addEventListener('mouseover', () => cursor.classList.add('hovering'))
    clickables[i].addEventListener('mouseout', () => cursor.classList.remove('hovering'))
}