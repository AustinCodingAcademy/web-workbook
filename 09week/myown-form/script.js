$(document).ready(function () {
  // var formValid = {
  //   firstName: false
  // };
  // function testValidation() {
  //   if (formValid.firsName) {
  //     $('.submit').removeAttr('disabled')
  //   } else {
  //     $('.submit').attr('disabled')
  //   }
  // }
  var testExp = new RegExp(/^[a-zA-Z]+$/);
    $('#firstName').focusout(function(){
      var name = $(this).val()
      if (name.length < 3) {
        $(".firstName-error").text("Required").show()
      } else {
        $('.firstName-error').hide()
        
        if(!testExp.test(firstName)) {
          $('.firstName-error').text("Letters Only.").show()
        } else {
          $('.firstName-error'),hide()
        }
      }
      $('#lastName').focusout(function(){
        var name = $(this).val()
        if (name.length < 3) {
          $(".lastName-error").text("Require.").show()
        } else {
          $('.lastName-error').hide()
         
          if(!testExp.test(lastName)) {
            $('.lastName-error').text("Letters Only.").show()
          } else {
            $('.lastName-error').hide()
          }
        }
    })
  })
})
