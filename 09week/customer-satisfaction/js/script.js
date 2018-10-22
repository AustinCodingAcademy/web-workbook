'use strict';

$(':checkbox').change(function () {
  $('#lbldescribe').removeAttr('hidden');
  $('#describe').removeAttr('hidden');
})


$(function () {
  $("form[name='satisfaction']").validate({
    rules: {
      password: {
        minlength: 5
      }
    },
    messages: {
      password: {
        minlength: "Your password must be at least 5 characters long."
      },
      submitHandler: function (form) {
        form.submit();
      }
    }
  })
});

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  // ... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevbtn").style.display = "none";
  } else {
    document.getElementById("prevbtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextbtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextbtn").innerHTML = "Next";
  }
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n)
}

$("#rating").on("input change", function () {
  $("#ratingnumber").text($(this).val())
});

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form... :
  if (currentTab >= x.length) {
    //...the form gets submitted:
    $("#satisfaction").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
};

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

function clearPage() {
  switch (currentTab) {
  case 0:
    $("#firstname").val("");
    $("#lastname").val("");
    break;
  case 1:
    $("#email").val("");
    $("#phone").val("");
    break;
  case 2:
    $("#username").val("");
    $("#password").val("");
    break;
  case 3:
    $("#htmlcode").prop('checked', false);
    $("#csscode").prop('checked', false);
    $("#jscode").prop('checked', false);
    $("#design").prop('checked', false);
    $('#describe').val("");
    break;
  case 4:
    $("#searchengine").val("");
    break;
  case 5:
    $("#male").prop("checked", true);
    $("#female").prop("checked", false);
    break;
  case 6:
    $("#rating").val("5");
    $("#ratingnumber").text("5");
    break;
  }
}