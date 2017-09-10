'use strict'
$(document).ready(function() {
$(function() {
  $("form[name='registration']").validate({
    rules: {
      firstname: "required",
      lastname: "required",
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
      firstname: "Do not forget your first name",
      lastname: "Do not forget your last name",
      password: {
        required: "Please provide a password",
        minlength: "Hey, your password must be at least 7 characters long"
      },
      email: "Please enter a valid email address"
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
});
