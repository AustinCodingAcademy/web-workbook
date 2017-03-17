  //
  // $('#projecta').hide(); // this or use css to hide the div
  // $('#projecta').delay(8000).fadeIn('slow');

  <script>
  $(document).ready(function(){
    $("button").click(function(){
      $("#div1").delay("slow").fadeIn();
      $("#div2").delay("fast").fadeIn();
      $("#div3").delay(800).fadeIn();
      $("#div4").delay(2000).fadeIn();
      $("#div5").delay(4000).fadeIn();
    });
  });
  </script>
