// smooth scrolling jQuery
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// carousel
<script>
    $(function(){

        $('.carousel-control').click(function(e){
            e.preventDefault();
            $('#carousel-example-generic').carousel( $(this).data() );
        });

    });//END document.ready
</script>
