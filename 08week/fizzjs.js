$(function() {

    $('#submit').click(function() {

        let a = $('#val1').val();
        let b = $('#val2').val();

    for(let num = 1; num <= 100; num ++) {
        if(num % a === 0 && num % b === 0) {
        console.log('fizzbuzz')
          $('#fizzy').append(' fizzbuzz, <br/>')
        }
        else if(num % a === 0){
          console.log('fizz');
            $('#fizzy').append(' fizz, <br/>')
        }
        else if (num % b === 0){
          console.log('buzz');
            $('#fizzy').append(' buzz, <br/>')
        }
        else{
        console.log(num);
          $('#fizzy').append(num + ',<br/>' )
      }
    };

    $('#clear').click(function(){
      $('#val1').text('');
      $('#val2').text('');
      $('#fizzy').text('');


    });


});
})
