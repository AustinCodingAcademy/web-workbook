var link = document.querySelector('link[rel="import"]');
var content = link.import;
var el = content.querySelector('.nav-container');
document.body.insertBefore(el.cloneNode(true), document.getElementsByTagName('main')[0]);

const pageContent = document.body.getElementsByTagName('main')[0]
const navToggle   = document.querySelector('.nav-toggler')
const navMenu     = document.querySelector('.nav-menu')
const currPage    = "../.." + window.location.pathname

navToggle.addEventListener('click', _ => {
  pageContent.classList.toggle('body-open')
  navToggle.classList.toggle('nav-open')
  navMenu.classList.toggle('nav-open')
})

// add current-page class to current page
document.querySelector('a[href="' + currPage + '"]').classList.add('current-page')
