
/** ==============================================
*  IMPORTS AND INSERTS HTML link (nav-menu.html) 
*  ==============================================
* */

/** ______________________________________________________________________________________
*  get current page HTML link (nav-menu.html), then insert it before current page <main>
*  */
var link    = document.querySelector('link[rel="import"]');
var content = link.import;
var el      = content.querySelector('.nav-container');
document.body.insertBefore(el.cloneNode(true), document.getElementsByTagName('main')[0]);


/** ==============================
 *  INIT PAGE VARIABLES / CLASSES
 *  ==============================
 * */
const pageContent   = document.body.getElementsByTagName('main')[0]
const navToggle     = document.querySelector('.nav-toggler')
const navMenu       = document.querySelector('.nav-menu')
const main          = document.getElementsByTagName('main')[0]
const currPagePath  = "../.." + window.location.pathname
const currPageRef   = document.querySelector('a[href="' + currPagePath + '"]')
const dropdown      = document.querySelectorAll('.dropdown')
const currPage      = document.querySelector('.current-page')
const openCloseAll  = document.querySelector('.nav-open-close-all')
pageContent.classList.add('body-open')
pageContent.classList.add('transition-transform')
currPageRef.classList.add('current-page')
SimpleScrollbar.initEl(navMenu)


/** =======================
 *  OPEN / CLOSE NAV-MENU
 *  =======================
 * */
navToggle.addEventListener('click', _ => { // toggle navbar when user clicks hamburger
  pageContent.classList.toggle('body-open')
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



/** ======================================
 *  DROPDOWN CLICK EVENT LISTENER CONTROL
 *  ======================================
 * */

openCloseAll.addEventListener('click', openClose)

for(var i=0; i<dropdown.length; i++) {
  dropdown[i].addEventListener('click', toggle)

  // make sure the current page's dropdown is open on page load
  if(dropdown[i].contains(currPage)) {
    dropdown[i].classList.add('current-folder')
    dropdown[i].classList.add('open')
    dropdown[i].querySelector('.dropdown-content').classList.add('open')
  }
}


/** ____________________________________________________________
 *  functions to be called by click event listeners
 */
function toggle() {
  this.classList.toggle('open')
  this.lastElementChild.classList.toggle('open')
}
function openClose() {
  if(this.classList.contains('closed')) {
    openAll()
  }
  else {
    closeAll()
  }
  this.classList.toggle('closed')
}
function openAll() {
  for(var i=0; i<dropdown.length; i++) {
    dropdown[i].classList.add('open')
    dropdown[i].lastElementChild.classList.add('open')
  }
}
function closeAll() {
  for(var i=0; i<dropdown.length; i++) {
    dropdown[i].classList.remove('open')
    dropdown[i].lastElementChild.classList.remove('open')
  }
}
