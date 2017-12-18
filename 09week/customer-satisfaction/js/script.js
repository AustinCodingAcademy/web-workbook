'use strict';

$(document).ready(function() {

  $(function() {
    $("form[name='satisfaction']").validate({
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 10
        }
      },
      // Specify validation error messages
      messages: {
        url: "Please enter your website",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 10 characters long"
        },
        email: "Please enter a valid email address",
        checkbox: "Please check one",
        radio: "Please select one"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });

});
