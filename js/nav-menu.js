const navToggle = document.querySelector('.nav-toggler')
const navMenu   = document.querySelector('.nav-menu')

navToggle.addEventListener('click', _ => {
  navMenu.classList.toggle('active')
  navToggle.classList.toggle('active')
})

navMenu.addEventListener('click', _ => {
  navMenu.classList.remove('active')
})
