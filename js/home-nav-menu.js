// get current page HTML link (nav-menu.html), then insert it before current page <main>
var link    = document.querySelector('link[rel="import"]');
var content = link.import;
var el      = content.querySelector('.nav-container');

document.body.insertBefore(el.cloneNode(true), document.getElementsByTagName('main')[0]);

// --------------------------------------------------------------
// INITIALIZE PAGE
// --------------------------------------------------------------

// get necessary elements to animate opening and closing of nav-menu
const pageContent     = document.body.getElementsByTagName('main')[0]
const homePageContent = document.querySelector('.content')
const navToggle       = document.querySelector('.nav-toggler')
const navMenu         = document.querySelector('.nav-menu')
const main            = document.getElementsByTagName('main')[0]
const dropdown        = document.querySelectorAll('.dropdown')
const currPage        = document.querySelector('.current-page')

pageContent.classList.add('transition-transform')

for(var i=0; i<dropdown.length; i++) {
  dropdown[i].addEventListener('click', toggle)
}

// turn navMenu into a SimpleScrollbar element
SimpleScrollbar.initEl(navMenu)
// --------------------------------------------------------------

// --------------------------------------------------------------
// OPEN / CLOSE ENTIRE NAV MENU
// --------------------------------------------------------------

navToggle.addEventListener('click', _ => { // toggle navbar when user clicks hamburger
  pageContent.classList.toggle('body-open')
  homePageContent.classList.toggle('nav-open')
  navToggle.classList.toggle('nav-open')
  navMenu.classList.toggle('nav-open')
})
main.addEventListener('click', _ => { // close navbar if user clicks off navbar while it is open
  if(navMenu.classList.contains('nav-open')) {
    pageContent.classList.remove('body-open')
    navToggle.classList.remove('nav-open')
    navMenu.classList.remove('nav-open')
  }
})
// --------------------------------------------------------------


// traverse through each group of links to identify which group has the current page,
// also handles opening and closing of groups
var addedEventListener = false

toggleHover()
window.addEventListener("resize", toggleHover)

function toggleHover() {
  if (!window.matchMedia("(max-width: 768px)").matches && !addedEventListener){
    for(var i=0; i<dropdown.length; i++) {
      dropdown[i].addEventListener('mouseover', open)
      dropdown[i].addEventListener('mouseout', close)
    }
    addedEventListener = true
    closeAll()
  }
  else if (window.matchMedia("(max-width: 768px)").matches && addedEventListener) {
    for(var i=0; i<dropdown.length; i++) {
      dropdown[i].removeEventListener('mouseover', open)
      dropdown[i].removeEventListener('mouseout', close)
    }
    addedEventListener = false
  }
}

function open() {
  this.classList.add('open')
  this.lastElementChild.classList.add('open')
}
function toggle() {
  this.classList.toggle('open')
  this.lastElementChild.classList.toggle('open')
}
function close() {
  this.classList.remove('open')
  this.lastElementChild.classList.remove('open')
}
function closeAll() {
  for(var i=0; i<dropdown.length; i++) {
    dropdown[i].classList.remove('open')
    dropdown[i].lastElementChild.classList.remove('open')
  }
}