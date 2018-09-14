var link = document.querySelector('link[rel="import"]');
var content = link.import;
var el = content.querySelector('.nav-container');
document.body.insertBefore(el.cloneNode(true), document.getElementsByTagName('main')[0]);

const navToggle = document.querySelector('.nav-toggler')
const navMenu   = document.querySelector('.nav-menu')

navToggle.addEventListener('click', _ => {
  navMenu.classList.toggle('active')
  navToggle.classList.toggle('active')
})

navMenu.addEventListener('click', _ => {
  navMenu.classList.remove('active')
})
