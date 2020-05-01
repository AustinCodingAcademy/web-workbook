// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='registration']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        url: {
        required: true,
          url:true,
        },
        lastname:{
          required:true,
                 },
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        password: {
          required: true,
          minlength: 5
        },
        subscribe: {
          required:true,
        },
        gender:{
          required:true,
        },
        volume:{
          required:true,
          min: 11
        },
      },
      // Specify validation error messages
      messages: {
        url: "Please enter your url",
        lastname: "Please enter your lastname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long"
        },
        email: "Please enter a valid email address",
        subscribe: "Please subscribe",
        gender: "Please be human",
        volume: "Please turn up",
    },
    
      submitHandler: function(form) {
        form.submit();
      }
    });
  });