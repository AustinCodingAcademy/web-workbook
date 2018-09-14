var link = document.querySelector('link[rel="import"]');
var content = link.import;
var el = content.querySelector('.nav-container');
document.body.insertBefore(el.cloneNode(true), document.getElementsByTagName('main')[0]);

const navToggle = document.querySelector('.nav-toggler')
const navMenu   = document.querySelector('.nav-menu')
const currPage  = "../.." + window.location.pathname

navToggle.addEventListener('click', _ => {
  navMenu.classList.toggle('active')
  navToggle.classList.toggle('active')
})

// add current-page class to current page
document.querySelector('ul > a[href="' + currPage + '"]').classList.add('current-page')
