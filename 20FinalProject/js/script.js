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
  $(function() {
    $("img.scale").imageScale();
  });
  <script>
      var slideIndex = 1;
      showDivs(slideIndex);

      function plusDivs(n) {
          showDivs(slideIndex += n);
      }

      function showDivs(n) {
          var i;
          var x = document.getElementsByClassName("mySlides");
          if (n > x.length) {
              slideIndex = 1
          }
          if (n < 1) {
              slideIndex = x.length
          }
          for (i = 0; i < x.length; i++) {
              x[i].style.display = "none";
          }
          x[slideIndex - 1].style.display = "block";
      }
$('#basicModal').modal(options);
$('#basicModal').on('shown.bs.modal', function (e) {
    alert('Modal is successfully shown!');
});
$('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});
