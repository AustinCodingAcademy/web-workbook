window.onscroll = function() {
  navbarScroll();
};

const navbar = document.querySelector(".nav-container");
const navbarHeght = navbar.clientHeight;
var heroHeight = document.querySelector(".hero").clientHeight;
var originScrollPos = window.pageYOffset;

function navbarScroll() {
  let currentScrollPos = window.pageYOffset;

  if (
    window.pageYOffset >= heroHeight - navbarHeght &&
    originScrollPos < currentScrollPos
  ) {
    navbar.classList.add("hidden");
  } else if (originScrollPos > currentScrollPos) {
    navbar.classList.remove("hidden");
  }

  originScrollPos = currentScrollPos;
}

function recalcHeights() {
  heroHeight = document.querySelector(".hero").clientHeight;
  navbarHeght = navbar.clientHeight;
}
