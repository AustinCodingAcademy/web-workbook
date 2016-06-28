$(document).ready(function() {

  //Sandwich flip
  $(window).scroll(function() {

    var verticalScroll = $(this).scrollTop();

    if(verticalScroll >= 300) {

      $('#sandwich').addClass('animated flip');
    }
    console.log(verticalScroll);

  });
// Four Items Function
  $(window).scroll(function() {

    var verticalScroll = $(this).scrollTop();

    if(verticalScroll >= 1074) {

      $('#my_1').addClass('animated fadeInDownBig');
      $('#my_2').addClass('animated fadeInRightBig');
      $('#my_3').addClass('animated fadeInUpBig');
      $('#my_4').addClass('animated fadeInLeftBig');
    }
    console.log(verticalScroll);

  });

});
