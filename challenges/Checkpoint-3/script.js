"use strict";

//initial number of cookies

  var num = 0;
  window.onload = function() {
    var name = prompt("What is your name");

    var space = document.getElementById("space");

    space.innerHTML = name + "'s Bakery";
  };

  var cookie = document.getElementById("cookie");

  function cookieClick() {
    num += 1;

    var numbers = document.getElementById("numbers");

    //upgrade level for printing
    var upgradeLevel = document.getElementById("upgradeLevel");

    numbers.innerHTML = num;
    //Regular cookie eater! upgrade to 2x
    if (num >= 30) {
      num += 2;
      upgradeLevel.innerHTML = "Regular cookie eater!";
    }

    //automatic Cookie Lover to 10x
    if (num >= 500) {
      num += 10;
      upgradeLevel.innerHTML = "Cookie Lover";
    }

    //automatic Crazy cookie eater to 30x
    if (num >= 1000) {
      num += 30;
      upgradeLevel.innerHTML = "Crazy cookie eater!";
    }

    //automatic Born to eat cookies! upgrade to 1000x
    if (num >= 100000) {
      num += 2500;
      upgradeLevel.innerHTML = "Born to eat cookies!";
    }
  }
  //* Start of #number animation
  $("#numbers")
    .mouseover(function() {
      $(this).css("opacity", ".1");
    })
    .mouseout(function() {
      $(this).css("opacity", "1.0");
    });
  $("#numbers").click(function() {
    $("#numbers").fadeIn("slow", function() {
      //* Animation complete
    });
  });
  //* chnaging sizd of cookie
  var image1 = document.getElementById("image-cookie");
  image1.onclick = function() {
    if (image1.style.width == "300px") {
      image1.style.width = "275px";
    } else {
      image1.style.width = "300px";
    }
  };

