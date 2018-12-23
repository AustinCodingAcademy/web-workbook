'use strict';

$(document).ready(function() {


// Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='customersatisfaction']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      URL: "required",
      lastname: "required",
      password: {
        required: true,
        minlength: 5
      },
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      reason: {
          required: true,
      },
      hiring: {
          required: true,
      },
      
    },
    // Specify validation error messages
    messages: {
      URL: "Please enter your URL",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});