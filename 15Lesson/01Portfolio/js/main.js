var slideIndex = 1;
showDivs(slideIndex);

var plusDivs = function(n) {
  showDivs(slideIndex += n);
};

// var currentDiv = function(n) {
//   showDivs(slideIndex = n);
// };

function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("slide");

  if (n > slides.length) {
  	slideIndex = 1;
  }    
  if (n < 1) {
  	slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";

  var captionText = document.getElementById("caption");
  captionText.textContent = slides[slideIndex-1].firstChild.alt;
}