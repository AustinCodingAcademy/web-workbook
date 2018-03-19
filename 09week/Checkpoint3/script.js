'use strict';

  // $(document).ready

  $( document ).ready(function() {
      console.log( "ready!" );
  });


    var count = 0;

    function updateCounter() {
        count++;
        document.getElementById("counted").innerHTML = "Coins = " + count + "";
    }

    $("#button4").click(function(){
            // $(".dc").empty();
            $("#counted").empty();
            count = 0;
            document.getElementById("button4").innerHTML = ("New Game");
        });
