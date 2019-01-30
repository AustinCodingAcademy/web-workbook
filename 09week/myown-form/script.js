$(document).ready(function(){
  $("form[name='signUp']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 8
      }
    },
    messages: {
      firstname: "First name only.",
      lastname: "Last name only.",
      password: {
        required: "Must provide password.",
        minlength: "Password must be 8 charicters or more"
      },
      email: "Please enter a valid email address",
      }
  
  })
  $('form').submit(function(){
    $('.submit').submit(function(){
      alert("Thank you for submitting")
    })
  })

})