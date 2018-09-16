// get current page HTML link (nav-menu.html), then insert it before current page <main>
var link    = document.querySelector('link[rel="import"]');
var content = link.import;
var el      = content.querySelector('.nav-container');

document.body.insertBefore(el.cloneNode(true), document.getElementsByTagName('main')[0]);

// get necessary elements to animate opening and closing of nav-menu
const pageContent = document.body.getElementsByTagName('main')[0]
const navToggle   = document.querySelector('.nav-toggler')
const navMenu     = document.querySelector('.nav-menu')
const main        = document.getElementsByTagName('main')[0]

pageContent.classList.add('body-open')
pageContent.classList.add('transition-transform')

navToggle.addEventListener('click', _ => {
  pageContent.classList.toggle('body-open')
  navToggle.classList.toggle('nav-open')
  navMenu.classList.toggle('nav-open')
})
main.addEventListener('click', _ => {
  if(navMenu.classList.contains('nav-open')) {
    pageContent.classList.remove('body-open')
    navToggle.classList.remove('nav-open')
    navMenu.classList.remove('nav-open')
  }
})

// get current page index directory path
const currPagePath = "../.." + window.location.pathname
const currPageRef = document.querySelector('a[href="' + currPagePath + '"]')

// add current-page class to current page
currPageRef.classList.add('current-page')


// traverse through each group of links to identify which group has the current page,
// also handles opening and closing of groups
let dropdown = document.querySelectorAll('.dropdown')
let currPage = document.querySelector('.current-page')

for(var i=0; i<dropdown.length; i++) {
  dropdown[i].addEventListener('click', toggle, false)

  if(dropdown[i].contains(currPage)) {
    dropdown[i].classList.add('current-folder')
  }
}

function toggle() {
  this.classList.toggle('open')
  this.lastElementChild.classList.toggle('open')
}