'use strict';

$(document).ready(function() {
  $("form[name='inquiry']").validate({
   // Specify validation rules
   rules: {
     // The key name on the left side is the name attribute
     // of an input field. Validation rules are defined
     // on the right side
     firstname: "required",
     lastname: "required",
     email: {
       required: true,
       // Specify that email should be validated
       // by the built-in "email" rule
       email: true
     },
     url: {
       required: true,
       url: true
     },
     password: {
       required: true,
       minlength: 5,
       number: true
     }
   },
   // Specify validation error messages
   messages: {
     firstname: "Please enter your firstname",
     lastname: "Please enter your lastname",
     password: {
       required: "Please provide a password",
       minlength: "Your password must be at least 5 characters long",
       number: "Your password must contain a number"
     },
     email: "Please enter a valid email address"
   },
   // Make sure the form is submitted to the destination defined
   // in the "action" attribute of the form when valid
   submitHandler: function(form) {
     form.submit();
   }
 });
  $("#reset").click(function(){
    console.log ("in reset function")
    $("input").text("");
  });
});
