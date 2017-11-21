
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


$('#myScrollspy').on('activate.bs.scrollspy', function () {
  // do something…
      $(this).css('border', "solid 2px red");
      var $spy = $(this).scrollspy('refresh');
})
