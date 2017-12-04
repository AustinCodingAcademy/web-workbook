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
  })

  function wins (){
    var xCount = $("[data-cell]:Contains('X')").length;
    var oCount = $("[data-cell]:Contains('O')").length;

//Check for a scratch by grabbing the count of all the squares
    if (xCount + oCount === 9)
    $('#announce-winner').html(`It's a Scratch!`)

//Pattern 1: [0,1,2]
    if($('[data-cell = "0"]').text() === turn &&
      $('[data-cell = "1"]').text() === turn &&
      $('[data-cell = "2"]').text() === turn )
      $('#announce-winner').html(`Player ${turn} wins!`);

      //Pattern 1: [3,4,5]
      if($('[data-cell = "3"]').text() === turn &&
        $('[data-cell = "4"]').text() === turn &&
        $('[data-cell = "5"]').text() === turn )
        $('#announce-winner').html(`Player ${turn} wins!`);

        //Pattern 1: [6,7,8]
        if($('[data-cell = "6"]').text() === turn &&
          $('[data-cell = "7"]').text() === turn &&
          $('[data-cell = "8"]').text() === turn )
          $('#announce-winner').html(`Player ${turn} wins!`);

          //Pattern 1: [0,3,6]
          if($('[data-cell = "0"]').text() === turn &&
            $('[data-cell = "3"]').text() === turn &&
            $('[data-cell = "6"]').text() === turn )
            $('#announce-winner').html(`Player ${turn} wins!`);

            //Pattern 1: [1,4,7]
            if($('[data-cell = "1"]').text() === turn &&
              $('[data-cell = "4"]').text() === turn &&
              $('[data-cell = "7"]').text() === turn )
              $('#announce-winner').html(`Player ${turn} wins!`);

              //Pattern 1: [2,5,8]
              if($('[data-cell = "2"]').text() === turn &&
                $('[data-cell = "5"]').text() === turn &&
                $('[data-cell = "8"]').text() === turn )
                $('#announce-winner').html(`Player ${turn} wins!`);

                //Pattern 1: [0,4,8]
                if($('[data-cell = "0"]').text() === turn &&
                  $('[data-cell = "4"]').text() === turn &&
                  $('[data-cell = "8"]').text() === turn )
                  $('#announce-winner').html(`Player ${turn} wins!`);

                  //Pattern 1: [2,4,6]
                  if($('[data-cell = "2"]').text() === turn &&
                    $('[data-cell = "4"]').text() === turn &&
                    $('[data-cell = "6"]').text() === turn )
                    $('#announce-winner').html(`Player ${turn} wins!`);
  }



  $("#clear").click(clear);


    function clear(){
    $('[data-cell]').empty();
    $('#announce-winner').empty();
  }



});
