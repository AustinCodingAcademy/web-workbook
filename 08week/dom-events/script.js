
$(document).ready(function() {
  let num = 0;
  let num10 = 0;
  let num100 = 0;
    $('#counter-1').click(function() {
      num++;
      $(this).text(num);
    })


    $('#counter-10').click(function() {
        num10 = num10 + 10;
        $(this).text(num10);
      })
    $('#counter-100').click(function() {
        num100 = num100 + 100;
        $(this).text(num100);
    })

    let dbl = num;
    let dbl10 = num10;
    let dbl100 = num100;
    $('#counter-all').click(function() {
      dbl++;
      $('#counter-1').text(dbl);
      dbl10 = dbl10 + 10;
      $('#counter-10').text(dbl10);
      dbl100 = dbl100 + 100;
      $('#counter-100').text(dbl100);
    })


  });