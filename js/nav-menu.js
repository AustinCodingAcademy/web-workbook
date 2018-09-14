var link = document.querySelector('link[rel="import"]');
var content = link.import;
var el = content.querySelector('.nav-container');
document.body.insertBefore(el.cloneNode(true), document.getElementsByTagName('main')[0]);

const pageContent = document.body.getElementsByTagName('main')[0]
const navToggle   = document.querySelector('.nav-toggler')
const navMenu     = document.querySelector('.nav-menu')
const dropdown    = document.querySelectorAll('.dropdown')
const dropdownContent = document.querySelectorAll('.dropdown-content')
const allPages  = Array.from(document.querySelectorAll('.nav-link'))
const currPagePath    = "../.." + window.location.pathname

navToggle.addEventListener('click', _ => {
  pageContent.classList.toggle('body-open')
  navToggle.classList.toggle('nav-open')
  navMenu.classList.toggle('nav-open')
})

// add current-page class to current page
document.querySelector('a[href="' + currPagePath + '"]').classList.add('current-page')
const currPage = document.querySelector('.current-page')

for(var i=0; i<dropdown.length; i++) {
  dropdown[i].addEventListener('click', open, false)

  if(dropdown[i].contains(currPage)) {
    dropdown[i].classList.add('current-folder')
  }
}

function open() {
  this.classList.toggle('open')
  this.lastElementChild.classList.toggle('open')
}
