'use strict'

$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='customer-satisfaction']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      email: {
        required: true,
        email: true,
        // Specify that email should be validated
        // by the built-in "email" rule
      },
      password: {
        required: true,
        minlength: 5,
      },
      url: {
        required: true,
        url: true,
      },
      checkbox: {
        required: true,
      }

      
    },
    // Specify validation error messages
    messages: {
      email: "Please enter a valid email address",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long"
      },
      url: "Please enter a valid address",
      checkbox: "Check the Box!",
      radio: "Click the center!"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});