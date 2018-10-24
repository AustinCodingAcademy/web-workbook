"use strict";
$(document).ready(function() {
  const main = $("main");

  // hammer/anvil elements
  const hammer = $("#hammer");
  const anvil = $("#anvil");

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
  var costApprentice = 10;
  const costHammer = 20;

  // upgrade elements
  const shop = $("#shop");
  const upgradeGetApprentice = $("#upgrade-apprentice");
  const upgradePlayerHammer = $("#upgrade-player-hammer");
  updateUpgradeCost(upgradeGetApprentice, costApprentice);
  updateUpgradeCost(upgradePlayerHammer, costHammer);

  // counter/level variables
  var maxLevel = 15;
  var count = 0;
  var playerHammerEfficiency = 1;
  var apprenticeHammerEfficiency = 1;
  var currentLevel = 1;
  var numberOfClicksToNextLevel = 100;
  var levelIncrement = numberOfClicksToNextLevel;
  const timeout = 3000;
  var currentMultiplier = 1;
  nextWeapon.text("Next Weapon: " + numberOfClicksToNextLevel);

  // game state variables
  var playerHasReachedMaxLevel = false;
  var playerHasApprentice = false;
  var playerHasPlayerHammerEfficiency = false;
  var apprenticeHasHammerEfficiency = false;

  anvil.mousedown(function() {
    playerSwingHammer();
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
  upgradeGetApprentice.click(function() {
    if (count >= costApprentice && !playerHasApprentice) {
      playerHasApprentice = true;
      count -= costApprentice;
      updateCounter();
      costApprentice*=6;
      updateUpgradeCost(upgradeGetApprentice, costApprentice);
      apprenticeControl();
      $(this).find(".shop-name").text("Apprentice Hammer Efficiency");
    } 
    else if (count >= costApprentice && !apprenticeHasHammerEfficiency) {
      console.log("spending ", costApprentice);
      apprenticeHammerEfficiency = 2;
      apprenticeHasHammerEfficiency = true;
      count -= costApprentice;
      updateCounter();
    } 
     else {
      return;
    }
  });

  upgradePlayerHammer.click(function() {
    if (count >= costHammer && !playerHasPlayerHammerEfficiency) {
      playerHammerEfficiency = 2;
      playerHasPlayerHammerEfficiency = true;
      count -= costHammer;
      updateCounter();
    } else {
      return;
    }
  });

  // OTHER FUNCTIONS
  // ======================================================================

  /**
   * fucntion: updateUpgradeCosts()
   * desc: sets upgrade cost element text to the value passed into function
   */
  function updateUpgradeCost(upgrade, cost) {
    let target = upgrade.find($(".shop-cost"));
    target.text(cost);
  }

  /**
   * function: apprenticeControl()
   * desc: function that controls automated hammers 
   * */

  function apprenticeControl() {
    console.log("in apprenticeControl()");
    window.setInterval(function() {
      apprenticeSwingHammer();
      if (playerHasApprentice) {
        currentMultiplier = 1;
      }
    }, timeout * currentMultiplier);
  }

  /**
   * function: apprenticSwingHammer()
   * desc: function that swings the hammer for the apprentice, this is automated and called in apprenticeControl()
   */
  function apprenticeSwingHammer() {
    count += apprenticeHammerEfficiency;
    updateCounter();
  }

  /**
   * function: playerSwingHammer()
   * desc: master function that handles most of the logic
   */
  function playerSwingHammer() {
    console.log("Hitting for ", playerHammerEfficiency, "point");
    count += playerHammerEfficiency;
    updateCounter();

    // exit if player have reached highest level
    if (playerHasReachedMaxLevel) {
      return;
    }

    // level Up!
    if (count >= numberOfClicksToNextLevel) {
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
    hammer.toggleClass("down");
    shakeAnvil();
  }

  /**
   * function: hammerAnimateUp()
   * desc: function that triggers the animation up classes
   */
  function hammerAnimateUp() {
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
