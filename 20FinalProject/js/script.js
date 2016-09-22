$(document).ready(function(){

  // Add scrollspy to <body>
  $('body').scrollspy({
    target: ".navbar",
    offset: 5
  });

//Smooth scrollspy



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
      480:{
        items:2,
        nav:true
      },
      800:{
        items:3,
        nav:true,
        loop:false
      },
      1200:{
        items:4,
        nav:true,
        loop:false
      },
      1400:{
        items:5,
        nav:true,
        loop:false
      },
    }
  });




});
