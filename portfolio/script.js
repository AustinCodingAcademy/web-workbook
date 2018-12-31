'use strict';
$(document).ready(function(){

var banner = $('.box18').offset().top

  $(window).on('scroll', function () {
    if($(window).scrollTop() >= 
  $('.box18').offset().top) {
    console.log('banner', banner);
    $('.box18').addClass('.aboutBanner');
  } else {
    $('.box18').removeClass('.box18');
  }
  
  });
}); 