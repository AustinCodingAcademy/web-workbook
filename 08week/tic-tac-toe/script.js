<script>
$(document).ready(function(){

  var move = 1;
  var play = true;

  $("row").click(function() {
    if ($(this).text()=="" && play) {
      if ((move%2)==1) { $(this).append("X"); } 
      else { $(this).append("O"); }
      move++;
    }
  });

});
</script> 