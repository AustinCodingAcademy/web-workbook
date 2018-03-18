'use strict';

$(document).ready(function() {
  $('#score').onchange(function () {
    $('[for="score"]').text('Your rating: ' + this.value);
  })
});