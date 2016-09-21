$(document).ready(function(){

  // Add scrollspy to <body>
  $('body').scrollspy({
    target: ".navbar",
    offset: 5
  });

  //flip button

  $('.animated').click(function() {
    var heading =  $(this);
    heading.removeClass('flipInX');
    setTimeout(function() {
      heading.addClass('flipInX');
    }, 10);
  });

  //Owl Carousel
  $("#work").owlCarousel({
    loop:true,
    margin: 0,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:true
      },
      600:{
        items:1,
        nav:true
      },
      1000:{
        items:1,
        nav:true,
        loop:false
      },
      1400:{
        items:2,
        nav:true,
        loop:false
      }
    }
  });
});
