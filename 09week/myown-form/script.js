$(document).ready(function () {
  var formValid = {
    firstName: false
  };
  function testValidation() {
    console.log('formValid.firsName:', formValid.firstName)
    if (formValid.firstName) {
      console.log('true:', true)
      $('.submit').removeAttr('disabled')
      return true
    } else {
      $('.submit').attr('disabled')
      return false
    }
  }
  var testExp = new RegExp(/^[a-zA-Z]+$/);
    $('#firstName').focusout(function(){
      // console.log('hello from focusout')
      var name = $(this).val()
      if (name.length < 3) {
        $(".firstName-error").text("Required").show();
      } else {
        $('.firstName-error').hide()
        formValid.firstName = true
        if(!testExp.test(firstName)) {
          $('.firstName-error').text("Letters Only.").show()
        } else {
          $('.firstName-error'),hide()
          formValid.firstName = true
        }
      }
      $('#lastName').focusout(function(){
        var name = $(this).val()
        if (name.length < 3) {
          $(".lastName-error").text("Required.").show()
        } else {
          $('.lastName-error').hide()
         
          if(!testExp.test(lastName)) {
            $('.lastName-error').text("Letters Only.").show()
          } else {
            $('.lastName-error').hide()
          }
        }
    })



    $('#emailInput').focusout(function(){
      console.log('hello from email')
      var email = $(this).val()
      if (email.length < 3) {
        $(".email-error").text("Required.").show()
      } else {
        $('.email-error').hide()
    
        // if(!testExp.test(email)) {
        //   $('.lastName-error').text("Letters Only.").show()
        // } else {
        //   $('.lastName-error').hide()
        // }
      }
  })





  })
  $('.submit').click(function(e){
    e.preventDefault()
    let validation = testValidation()
    console.log('validation:', validation)
    if (validation) {
      $('form').submit()
    }
  })
 
  
})
