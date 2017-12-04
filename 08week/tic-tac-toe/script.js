'use strict';

$(document).ready(function() {
  var turn = 'X';
  $('[data-cell]').on('click', function(){
    if($(this).text()===''){
      $(this).text(turn);
        wins();
        if(turn === 'O'){
          turn = 'X';
        }else {
          turn = 'O';
    }
  }
  tie();
  })

  function wins (){
    var xCount = $("[data-cell]:Contains('X')").length;
    var oCount = $("[data-cell]:Contains('O')").length;

    if (xCount + oCount === 9)
    $('#announce-winner').html(`It's a Scratch!`);

    if($('[data-cell = "0"]').text() === turn &&
      $('[data-cell = "1"]').text() === turn &&
      $('[data-cell = "2"]').text() === turn )
      $('#announce-winner').html(`Player ${turn} wins!`);

      if($('[data-cell = "3"]').text() === turn &&
        $('[data-cell = "4"]').text() === turn &&
        $('[data-cell = "5"]').text() === turn )
        $('#announce-winner').html(`Player ${turn} wins!`);

        if($('[data-cell = "6"]').text() === turn &&
          $('[data-cell = "7"]').text() === turn &&
          $('[data-cell = "8"]').text() === turn )
          $('#announce-winner').html(`Player ${turn} wins!`);

          if($('[data-cell = "0"]').text() === turn &&
            $('[data-cell = "3"]').text() === turn &&
            $('[data-cell = "6"]').text() === turn )
            $('#announce-winner').html(`Player ${turn} wins!`);

            if($('[data-cell = "1"]').text() === turn &&
              $('[data-cell = "4"]').text() === turn &&
              $('[data-cell = "7"]').text() === turn )
              $('#announce-winner').html(`Player ${turn} wins!`);

              if($('[data-cell = "2"]').text() === turn &&
                $('[data-cell = "5"]').text() === turn &&
                $('[data-cell = "8"]').text() === turn )
                $('#announce-winner').html(`Player ${turn} wins!`);

                if($('[data-cell = "0"]').text() === turn &&
                  $('[data-cell = "4"]').text() === turn &&
                  $('[data-cell = "8"]').text() === turn )
                  $('#announce-winner').html(`Player ${turn} wins!`);

                  if($('[data-cell = "2"]').text() === turn &&
                    $('[data-cell = "4"]').text() === turn &&
                    $('[data-cell = "6"]').text() === turn )
                    $('#announce-winner').html(`Player ${turn} wins!`);
  }

function tie() {
  var i = 0;

}


  $("#clear").click(clear);


    function clear(){
    $('[data-cell]').empty();
    $('#announce-winner').empty();
    // turn = 'X';
  }

  // function alternate(){
  //   var counter = 0;
  //   $('[data-cell]').each(function(){
  //     counter += Number($(this).text());
  //   })
  //   if(counter === 25){
  //     $('#announce-winner').text("You Hit 25!!");
  //   }
  // }
  //

});
