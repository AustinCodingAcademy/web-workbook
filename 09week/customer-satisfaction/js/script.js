$(function(){
  $("form[name='registration']").validate({
    rules:{
      firstname: "required",
      lastname: "required",
      email:{
        required:true,
        email: true
      },
      username:{
        required: true,
        minlength: 5
      },


      password:{
        required: true,
        minlength: 5
      }
      },

      messages:{
        firstname: "Please enter your first name",
        lastname: "Please enter your last name",
        password: {
          required:"Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address"
      },
      submithandler: function(form){
        form.submit();
      }

  })
});
