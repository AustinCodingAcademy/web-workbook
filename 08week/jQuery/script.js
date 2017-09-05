// when the document is done loading, run the script inside
$(document).ready(function() {
  num = 0;
  $('#counter0').click(function() {
    num++;
    $('#counter').text(num);
  })

  $(document).ready(function() {
    num = 0;
    $('#counter10').click(function() {
      num = num + 10;

      $("#counter1").text(num);

    });
  });
  $(document).ready(function() {
    num = 0;
    $('#counter100').click(function() {
      num = num + 100;

      $("#counter2").text(num);

    });
  });
  //Button
  $(document).ready(function() {
    num = 0;
    $('.other').click(function() {
      num = num + 100;

      $("#counter2").text(num);

    });
    num = 0;
    $('.other').click(function() {
      num = num + 10;

      $("#counter1").text(num);

    });
    num = 0;
    $('.other').click(function() {
      num++;
      $('#counter').text(num);
    })

  });
  $(document).ready(function() {
    $('.box').mouseenter(function() {
      $('#counter, #counter1, #counter2').css('background', 'yellow');

    });

  });
});
