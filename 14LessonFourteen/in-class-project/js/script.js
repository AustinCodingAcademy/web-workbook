<script type="text/javascript" src="js/script.js"></script>
$('#slider').slideReveal({
  trigger: $("#trigger")
});
$(document).ready(function() {
  $('.box').hover(function(){
      $(this).find('.caption').slideDown();
    },
    function(){
      $(this).find('.caption').slideUp();
    }
  );
  });
