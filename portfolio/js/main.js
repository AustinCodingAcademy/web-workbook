window.onscroll = function() {
  navbarScroll();
};

const navbar = document.querySelector(".nav-container");
var originScrollPos = window.pageYOffset;

function navbarScroll() {
  let currentScrollPos = window.pageYOffset;

  if (originScrollPos < currentScrollPos) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  originScrollPos = currentScrollPos;
}

function recalcHeights() {
  heroHeight = document.querySelector(".hero").clientHeight;
  navbarHeght = navbar.clientHeight;
}
