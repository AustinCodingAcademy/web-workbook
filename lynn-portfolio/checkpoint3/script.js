"use strict";
var rotation = 0;

jQuery.fn.rotate = function (degrees) {
  $(this).css({
    '-webkit-transform': 'rotate(' + degrees + 'deg)',
    '-moz-transform': 'rotate(' + degrees + 'deg)',
    '-ms-transform': 'rotate(' + degrees + 'deg)',
    'transform': 'rotate(' + degrees + 'deg)'
  });
  return $(this);
};

$("#wheel").click(function () {
  var degrees = getRandom15();
  var inBox = whereDidILand(degrees);
  $(this).rotate(degrees);
  $("#winnings").text(inBox);
  console.log("what is this?", this);
  console.log("what degrees is", degrees);
})

function getRandom15() {
  return getRandomInt(1, 360 / 15) * 15;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function whereDidILand(degrees) {
  if (360 === degrees) {

    return "test"

  }
  else if (15 === degrees) {

    return "test"

  }
  else if (30 === degrees) {

    return "test"

  }
  else if (45 === degrees) {

    return "test"

  }
  else if (60 === degrees) {

    return "test"

  }
  else if (75 === degrees) {

    return "test"

  }
  else if (90 === degrees) {

    return "test"

  }
  else if (105 === degrees) {

    return "test"

  }
  else if (120 === degrees) {

    return "test"

  }
  else if (135 === degrees) {

    return "test"

  }
  else if (150 === degrees) {

    return "test"

  }
  else if (165 === degrees) {

    return "test"

  }
  else if (180 === degrees) {

    return "test"

  }
  else if (195 === degrees) {

    return "test"

  }
  else if (210 === degrees) {

    return "test"

  }
  else if (225 === degrees) {

    return "test"

  }
  else if (240 === degrees) {

    return "test"

  }
  else if (255 === degrees) {

    return "test"

  }
  else if (270 === degrees) {

    return "test"

  }
  else if (285 === degrees) {

    return "test"

  }
  else if (290 === degrees) {

    return "test"

  }
  else if (295 === degrees) {

    return "test"

  }
  else if (300 === degrees) {

    return "test"

  }
  else if (315 === degrees) {

    return "test"

  }
  else if (330 === degrees) {

    return "test"

  }
  else if (345 === degrees) {

    return "test"

  }

}