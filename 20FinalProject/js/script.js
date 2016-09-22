$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    margin: 5,
    items: 1,
    nav: true,
    responsive: {
      480: {
        items: 1
      },
      620: {
        items: 2
      },
      810: {
        items: 3
      },
      1400: {
        items: 4
      }
    }
  });
})
