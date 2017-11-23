$(document).ready(function(){

new WOW().init();

$('.navbar li a').click(function(smoothScroll) {
  smoothScroll.preventDefault();

   // store hash
   var hash = this.hash;

   //gets the height of the header
   var navOffset;
   navOffset = $('#headerlist').height();

   // animate and offset
   $('html, body').animate({
       scrollTop: $(hash).offset().top - navOffset - 25
     }, 600, function(){

       // when done, add hash to url
       // (default click behaviour)
     });
     window.location.hash = hash;
  });
   
  $('body').scrollspy({
    target: 'headerlist'
  });

  $('.navbar-left').on('activate.bs.scrollspy', function(){
    var hash = $('this.').find('li.active a').attr('href');

    if(hash !== '#u4e'){
      console.log(hash);
    //$('header nav').addClass('navIconBorder');
    }
    else{
    $('header nav').removeClass('navIconBorder');
    }
  });

});
