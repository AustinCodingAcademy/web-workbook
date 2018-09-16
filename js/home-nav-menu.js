// get current page HTML link (nav-menu.html), then insert it before current page <main>
var link    = document.querySelector('link[rel="import"]');
var content = link.import;
var el      = content.querySelector('.nav-container');

document.body.insertBefore(el.cloneNode(true), document.getElementsByTagName('main')[0]);

// traverse through each group of links to identify which group has the current page,
// also handles opening and closing of groups
let dropdown = document.querySelectorAll('.dropdown')
let currPage = document.querySelector('.current-page')

for(var i=0; i<dropdown.length; i++) {
  dropdown[i].addEventListener('mouseover', open, false)
  dropdown[i].addEventListener('click', toggle, false)
  dropdown[i].addEventListener('mouseout', close, false)

  if(dropdown[i].contains(currPage)) {
    dropdown[i].classList.add('current-folder')
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