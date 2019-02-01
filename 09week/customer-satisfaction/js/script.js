'use strict';

$(document).ready(function() {
  const inputs = document.querySelectorAll("input, select, textarea");

  inputs.forEach(input => {
  input.addEventListener(
    "invalid",
    event => {
      input.classList.add("error");
    },
    false
  );
});
});