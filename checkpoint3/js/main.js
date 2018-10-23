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
  var swords = [
    "shortsword",
    "longsword",
    "fancy_longsword",
    "serrated_sword",
    "golden_rapier",
    "blood_shinto",
    "bronze_flamberge",
    "obsidian_sword",
    "gemmed_obsidian_sword",
    "diamond_longsword",
    "crystal_shortsword",
    "sapphire_scimitar",
    "golden_gladius",
    "shadow_blade",
    "demonic_greatsword"
  ];
  weaponName.text(swords[0]);

  // main ui elements
  const counter = $("#counter");
  const nextWeapon = $("#next-weapon-level");
  const announceWin = $("#max-level");

  // upgrade costs
  const costApprentice = 50;
  const costHammer = 200;

  // upgrade elements
  const upgrades = $("#upgrades");
  const upgradeApprentice = $("#upgrade-apprentice");
  const upgradeHammer = $("#upgrade-hammer");
  initUpgradeCost(upgradeApprentice, costApprentice);
  initUpgradeCost(upgradeHammer, costHammer);

  // counter/level variables
  var maxLevel = 15;
  var count = 0;
  var hammerEfficiency = 1;
  var currentLevel = 1;
  var numberOfClicksToNextLevel = 200;
  var levelIncrement = numberOfClicksToNextLevel;
  const timeout = 3000;
  var currentMultiplier = 1;
  nextWeapon.text("Next Weapon: " + numberOfClicksToNextLevel);

  // game state variables
  var playerHasReachedMaxLevel = false;
  var playerHasApprentice = false;
  var playerHasHammerEfficiency = false;

  anvil.mousedown(function() {
    swingHammer();
    hammerAnimateDown();
  });

  anvil.mouseup(function() {
    hammerAnimateUp();
  });

  main.mouseup(function() {
    hammer.removeClass("down");
  });

  // UPGRADE CLICK FUNCTIONS
  // ====================================================================
  upgradeApprentice.click(function() {
    if (count >= costApprentice && !playerHasApprentice) {
      playerHasApprentice = true;
      count -= costApprentice;
      updateCounter();
      hammerControl();
    } else {
      return;
    }
  });

  upgradeHammer.click(function() {
    if (count >= costHammer && !playerHasHammerEfficiency) {
      hammerEfficiency *= 2;
      playerHasHammerEfficiency = true;
      count -= costHammer;
      updateCounter();
      hammerControl();
    } else {
      return;
    }
  });

  // OTHER FUNCTIONS
  // ======================================================================

  /**
   * fucntion: initUpgradeCosts()
   * desc: sets upgrade cost element text to the value passed into function
   */
  function initUpgradeCost(upgrade, cost) {
    let target = upgrade.find($(".upgrade-cost"));
    target.text(cost);
  }

  /**
   * function: hammerControl()
   * desc: master interval control that checks game state and calls updateInterval when needed
   */

  function hammerControl() {
    window.setInterval(function() {
      swingHammer();
      if (playerHasApprentice) {
        currentMultiplier = 1;
      }
    }, timeout * currentMultiplier);
  }

  /**
   * function: swingHammer()
   * desc: master function that handles most of the logic
   */
  function swingHammer() {
    count += hammerEfficiency;
    updateCounter();

    // exit if player have reached highest level
    if (playerHasReachedMaxLevel) {
      return;
    }

    // level Up!
    if (count === numberOfClicksToNextLevel) {
      numberOfClicksToNextLevel *= 2;
      currentLevel++;

      // this if/else just handles file names
      if (currentLevel < 10) {
        weaponName.text(swords[currentLevel - 1]);
        weaponImg.attr("src", "img/sword_0" + currentLevel + ".png");
      } else {
        weaponName.text(swords[currentLevel - 1]);
        weaponImg.attr("src", "img/sword_" + currentLevel + ".png");
      }

      // annouce max level
      if (currentLevel === maxLevel && !playerHasReachedMaxLevel) {
        announceWin.addClass("show");
        playerHasReachedMaxLevel = true;
        nextWeapon.text("Next Weapon: ???");
        return;
      }

      numberOfClicksToNextLevel += levelIncrement;
      nextWeapon.text("Next Weapon: " + numberOfClicksToNextLevel);
    }
  }

  /**
   * function: hammerAnimateDown()
   * desc: function that triggers the animation down classes
   */
  function hammerAnimateDown() {
    sparks.toggleClass("animate");
    hammer.toggleClass("down");
    shakeAnvil();
  }

  /**
   * function: hammerAnimateUp()
   * desc: function that triggers the animation up classes
   */
  function hammerAnimateUp() {
    sparks.removeClass("animate");
    hammer.toggleClass("down");
    shakeAnvil();
  }

  function shakeAnvil() {
    anvil.toggleClass("shake");
  }

  /**
   * function: updateCounter()
   * desc: simple helper function to update counter when needed
   */
  function updateCounter() {
    counter.text(count);
  }
});
