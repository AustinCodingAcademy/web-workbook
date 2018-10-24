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
  const cost_HireApprentice = 1;
  const cost_ApprenUpgrade1 = 1;
  const cost_ApprenUpgrade2 = 1;
  const cost_ApprenUpgrade3 = 1;
  const cost_HammerUpgrade1 = 1;
  const cost_HammerUpgrade2 = 1;
  const cost_HammerUpgrade3 = 1;
  const cost_HammerUpgrade4 = 1;

  // upgrade elements
  const shop = $("#shop");
  const hireApprentice = $("#hire-apprentice");
  const apprenticeUpgrade1 = $("#apprentice-upgrade-1");
  const apprenticeUpgrade2 = $("#apprentice-upgrade-2");
  const apprenticeUpgrade3 = $("#apprentice-upgrade-3");
  const hammerUpgrade1 = $("#hammer-upgrade-1");
  const hammerUpgrade2 = $("#hammer-upgrade-2");
  const hammerUpgrade3 = $("#hammer-upgrade-3");
  const hammerUpgrade4 = $("#hammer-upgrade-4");
  updateUpgradeCost(hireApprentice, cost_HireApprentice);
  updateUpgradeCost(hammerUpgrade1, cost_HammerUpgrade1);

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
  var playerHasPlayerHammerUpgrade = false;
  var apprenticeHasHammerEfficiency = false;


  // MASTER CLICK FUNCTIONS
  // ====================================================================
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

  // SHOP FUNCTIONS
  // ====================================================================
  hireApprentice.click(function() {

    if (playerHasApprentice) {
      return;
    }


    if (count >= cost_HireApprentice && !playerHasApprentice) {
      shop_hireApprentice();
    } else {
      return;
    }
  });

  hammerUpgrade1.click(function() {

    if (playerHasPlayerHammerUpgrade) {
      return;
    }

    if (count >= cost_HammerUpgrade1 && !playerHasPlayerHammerUpgrade) {
      shop_buyHammerUpgrade();
    } else {
      return;
    }
  });

  function shop_hireApprentice() {
    playerHasApprentice = true;
    count -= cost_HireApprentice;
    updateCounter();
    apprenticeStart();
  }

  function shop_buyApprenticeUpgrade() {
    apprenticeHammerEfficiency = 2;
    apprenticeHasHammerEfficiency = true;
    count -= cost_HireApprentice;
    updateCounter();
  }

  function shop_buyHammerUpgrade() {
    playerHammerEfficiency = 2;
    playerHasPlayerHammerUpgrade = true;
    count -= cost_HammerUpgrade1;
    updateCounter();
  }

  /**
   * function: updateShop()
   * desc: checks if player can afford items in the shop (red text if cannot, white if can)
   */
  function updateShop() {
    let costs = shop.find(".shop-cost");

    if (playerHasPlayerHammerUpgrade) {
      let cost = hammerUpgrade1.find(".shop-cost");
      cost.text("Purchased");

      return;
    }
    if (playerHasApprentice) {
      let cost = hireApprentice.find(".shop-cost");
      cost.text("Purchased");
      
      return;
    }

    for (var i = 0; i < costs.length; i++) {
      let cost = costs[i].innerHTML;

      if (count >= cost) {
        costs[i].classList.add("purchasable");
      } else {
        costs[i].classList.remove("purchasable");
      }
    }
  }

  // HELPER/OTHER FUNCTIONS
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
   * function: apprenticeStart()
   * desc: function that starts automated hammers
   * */

  function apprenticeStart() {
    window.setInterval(function() {
      apprenticeSwingHammer();
      if (playerHasApprentice) {
        currentMultiplier = 1;
      }
    }, timeout * currentMultiplier);
  }

  /**
   * function: apprenticSwingHammer()
   * desc: function that swings the hammer for the apprentice, this is automated and called in apprenticeStart()
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
   * desc: simple helper funtion to update counter when needed
   */
  function updateCounter() {
    counter.text(count);
    updateShop();
  }
});
