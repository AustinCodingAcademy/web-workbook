"use strict";
$(document).ready(function() {
  const main = $("main");
  
  // hammer/anvil elements
  const hammer = $("#hammer");
  const anvil = $("#anvil");
  const sparks = $(".spark");
  
  // weapon elements
  const weaponImg = $("#weapon-img");
  const weaponName = $("#weapon-name");
  
  // ui elements
  const counter = $("#counter");
  const nextWeapon = $("#next-weapon");
  const announceWin = $("#max-level");
  
  // counter/level variables
  var maxLevel = 15;
  var count = 0;
  var currentLevel = 1;
  var nextLevel = 2;
  var levelIncrement = nextLevel;
  var playerHasReachedMaxLevel = false;
  nextWeapon.text("Next Weapon: " + nextLevel);  

  anvil.mousedown(function() {
    sparks.toggleClass("animate");
    hammer.toggleClass("down");
    anvil.toggleClass("shake");

    count++;
    counter.text(count);
    
    // exit if player have reached highest level
    if(playerHasReachedMaxLevel) {
      return;
    }
    
    // level Up!
    if(count === nextLevel) {
      
      currentLevel++;
      
      // this if/else just handles file names
      if (currentLevel < 10) {
        weaponName.text("sword_0" + currentLevel);
        weaponImg.attr("src", "img/sword_0" + currentLevel + ".png");
      }
      else {
        weaponName.text("sword_" + currentLevel);
        weaponImg.attr("src", "img/sword_" + currentLevel + ".png");
      }
      
      // annouce max level
      if(currentLevel === maxLevel && !playerHasReachedMaxLevel) {
        console.log("hi");
        announceWin.addClass("show");
        playerHasReachedMaxLevel = true;
        nextWeapon.text("Next Weapon: ???");
        return;
      }

      nextLevel += levelIncrement;
      nextWeapon.text("Next Weapon: " + nextLevel);
      
    }
  });
  
  anvil.mouseup(function() {
    sparks.removeClass("animate");
    hammer.toggleClass("down");
    anvil.toggleClass("shake");
    
  });

  main.mouseup(function() {
    hammer.removeClass("down");
  });
});
