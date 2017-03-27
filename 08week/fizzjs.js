$(function() {

    $('#submit').click(function() {

        let a = $('#val1').val();
        let b = $('#val2').val();

    for(let num = 1; num <= 100; num ++) {
        if(num % a === 0 && num % b === 0) {
        console.log('fizzbuzz')
          $('#fizzy').text(' fizzbuzz, ')
        }
        else if(num % a === 0){
          console.log('fizz');
            $('#fizzy').text(' fizz, ')
        }
        else if (num % b === 0){
          console.log('buzz');
            $('#fizzy').text(' buzz, ')
        }
        else{
        console.log(num);
          $('#fizzy').text(num + ' , ' )
      }
    };


});
})
