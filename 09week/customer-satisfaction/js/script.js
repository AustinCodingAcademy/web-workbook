'use strict';
/* I couldn't get this to work :( */
$(document).ready(function() {

  $("form[name='customersatisfaction']").validate({

    rules: {
      first: "required",
        required: true,
      last: "required",
        required: true,
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      first: "Please enter your firstname",
      last: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
