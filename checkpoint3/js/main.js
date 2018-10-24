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
  const cost_HireApprentice = 5;
  const cost_ApprenUpgrade1 = 10;
  const cost_ApprenUpgrade2 = 20;
  const cost_ApprenUpgrade3 = 30;
  const cost_HammerUpgrade1 = 1;
  const cost_HammerUpgrade2 = 2;
  const cost_HammerUpgrade3 = 3;
  const cost_HammerUpgrade4 = 4;

  // shop elements
  const hireApprentice = $("#hire-apprentice");
  const apprenticeUpgrade1 = $("#apprentice-upgrade-1");
  const apprenticeUpgrade2 = $("#apprentice-upgrade-2");
  const apprenticeUpgrade3 = $("#apprentice-upgrade-3");
  const hammerUpgrade1 = $("#hammer-upgrade-1");
  const hammerUpgrade2 = $("#hammer-upgrade-2");
  const hammerUpgrade3 = $("#hammer-upgrade-3");
  const hammerUpgrade4 = $("#hammer-upgrade-4");
  const shop = $("#shop");
  initShop();

  // counter/level variables
  var maxLevel = 15;
  var count = 0;
  var playerHammerEfficiency = 1;
  var apprenticeHammerEfficiency = 1;
  var currentLevel = 1;
  var numberOfClicksToNextLevel = 100;
  var levelIncrement = numberOfClicksToNextLevel;
  var timeout = 3000;
  var currentMultiplier = 1;
  nextWeapon.text("Next Weapon: " + numberOfClicksToNextLevel + " clicks");

  // game state variables
  var playerHasApprentice = false;
  var apprenticeHasUpgrade1 = false;
  var apprenticeHasUpgrade2 = false;
  var apprenticeHasUpgrade3 = false;
  var playerHasHammerUpgrade1 = false;
  var playerHasHammerUpgrade2 = false;
  var playerHasHammerUpgrade3 = false;
  var playerHasHammerUpgrade4 = false;
  var playerHasReachedMaxLevel = false;

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
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    if (playerHasApprentice) {
      return;
    }

    if (count >= cost_HireApprentice) {
      shop_hireApprentice();
    } else return;
  });
  apprenticeUpgrade1.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (apprenticeHasUpgrade1) {
      return;
    }

    if (count >= cost_ApprenUpgrade1) {
      shop_buyApprenticeUpgrade1();
    } else return;
  });
  apprenticeUpgrade2.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (apprenticeHasUpgrade2) {
      return;
    }

    if (count >= cost_ApprenUpgrade2) {
      shop_buyApprenticeUpgrade2();
    } else return;
  });
  apprenticeUpgrade3.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (apprenticeHasUpgrade3) {
      return;
    }

    if (count >= cost_ApprenUpgrade3) {
      shop_buyApprenticeUpgrade3();
    } else return;
  });

  hammerUpgrade1.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (playerHasHammerUpgrade1) {
      return;
    }

    if (count >= cost_HammerUpgrade1) {
      shop_buyHammerUpgrade1();
    } else {
      return;
    }
  });
  hammerUpgrade2.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (playerHasHammerUpgrade2) {
      return;
    }

    if (count >= cost_HammerUpgrade2) {
      shop_buyHammerUpgrade2();
    } else {
      return;
    }
  });
  hammerUpgrade3.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (playerHasHammerUpgrade3) {
      return;
    }

    if (count >= cost_HammerUpgrade3) {
      shop_buyHammerUpgrade3();
    } else {
      return;
    }
  });
  hammerUpgrade4.click(function() {
    let unlocked = shop_checkLockStatus($(this));

    if (!unlocked) {
      return;
    }

    shop_checkLockStatus($(this));
    if (playerHasHammerUpgrade4) {
      return;
    }

    if (count >= cost_HammerUpgrade4) {
      shop_buyHammerUpgrade4();
    } else {
      return;
    }
  });

  function shop_hireApprentice() {
    count -= cost_HireApprentice;
    playerHasApprentice = true;
    $(apprenticeUpgrade1).addClass("unlocked");
    updateCounter();
    apprenticeStart();
  }

  function shop_buyApprenticeUpgrade1() {
    apprenticeHammerEfficiency = 2;
    apprenticeHasUpgrade1 = true;
    count -= cost_ApprenUpgrade1;
    $(apprenticeUpgrade2).addClass("unlocked");
    updateCounter();
  }
  function shop_buyApprenticeUpgrade2() {
    apprenticeHammerEfficiency = 4;
    apprenticeHasUpgrade2 = true;
    count -= cost_ApprenUpgrade2;
    $(apprenticeUpgrade3).addClass("unlocked");
    updateCounter();
  }
  function shop_buyApprenticeUpgrade3() {
    apprenticeHammerEfficiency = 8;
    apprenticeHasUpgrade3 = true;
    count -= cost_ApprenUpgrade3;
    updateCounter();
  }

  function shop_buyHammerUpgrade1() {
    playerHammerEfficiency = 2;
    count -= cost_HammerUpgrade1;
    playerHasHammerUpgrade1 = true;
    $(hammerUpgrade2).addClass("unlocked");
    updateCounter();
  }
  function shop_buyHammerUpgrade2() {
    playerHammerEfficiency = 4;
    count -= cost_HammerUpgrade2;
    playerHasHammerUpgrade2 = true;
    $(hammerUpgrade3).addClass("unlocked");
    $(hireApprentice).addClass("unlocked");
    updateCounter();
  }
  function shop_buyHammerUpgrade3() {
    playerHammerEfficiency = 8;
    count -= cost_HammerUpgrade3;
    playerHasHammerUpgrade3 = true;
    $(hammerUpgrade4).addClass("unlocked");
    updateCounter();
  }
  function shop_buyHammerUpgrade4() {
    playerHammerEfficiency *= 2;
    count -= cost_HammerUpgrade4;
    playerHasHammerUpgrade4 = true;
    updateCounter();
  }

  function shop_checkLockStatus(el) {
    if ($(el).hasClass("unlocked")) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * function: updateShop()
   * desc: changes shop item text to purchased if player has purchased that item,
   * also checks if player can afford items in the shop (red text if cannot, white if can)
   */
  function updateShop() {
    let costs = shop.find(".shop-cost");

    // changes hammer upgrade text to purchased if player has purchased
    if (playerHasHammerUpgrade1) {
      let cost = hammerUpgrade1.find(".shop-cost");
      cost.text("Purchased");
    }
    if (playerHasHammerUpgrade2) {
      let cost = hammerUpgrade2.find(".shop-cost");
      cost.text("Purchased");
    }
    if (playerHasHammerUpgrade3) {
      let cost = hammerUpgrade3.find(".shop-cost");
      cost.text("Purchased");
    }
    if (playerHasHammerUpgrade4) {
      let cost = hammerUpgrade4.find(".shop-cost");
      cost.text("Purchased");
    }

    // changes apprentice upgrade text to purchased if player has purchased
    if (playerHasApprentice) {
      let cost = hireApprentice.find(".shop-cost");
      cost.text("Purchased");
    }
    if (apprenticeHasUpgrade1) {
      let cost = apprenticeUpgrade1.find(".shop-cost");
      cost.text("Purchased");
    }
    if (apprenticeHasUpgrade2) {
      let cost = apprenticeUpgrade2.find(".shop-cost");
      cost.text("Purchased");
    }
    if (apprenticeHasUpgrade3) {
      let cost = apprenticeUpgrade3.find(".shop-cost");
      cost.text("Purchased");
    }

    // dynamic cost color control if player can purchase or not
    for (var i = 0; i < costs.length; i++) {
      let currentItemCost = $(costs[i]);
      let currentItem = $(currentItemCost).parent();

      let cost = currentItemCost.text();

      if (count >= cost && shop_checkLockStatus(currentItem)) {
        currentItemCost.addClass("green");
      } else if (currentItemCost.text() === "Purchased") {
        currentItemCost.addClass("green");
      } else {
        currentItemCost.removeClass("green");
        currentItemCost.addClass("red");
      }
    }
  }

  /**
   * function: initShop
   * desc: sets up preliminary shop status
   */
  function initShop() {
    updateUpgradeCost(hireApprentice, cost_HireApprentice);
    updateUpgradeCost(apprenticeUpgrade1, cost_ApprenUpgrade1);
    updateUpgradeCost(apprenticeUpgrade2, cost_ApprenUpgrade2);
    updateUpgradeCost(apprenticeUpgrade3, cost_ApprenUpgrade3);
    updateUpgradeCost(hammerUpgrade1, cost_HammerUpgrade1);
    updateUpgradeCost(hammerUpgrade2, cost_HammerUpgrade2);
    updateUpgradeCost(hammerUpgrade3, cost_HammerUpgrade3);
    updateUpgradeCost(hammerUpgrade4, cost_HammerUpgrade4);
    updateShop();
  }

  // HELPER/OTHER FUNCTIONS
  // ======================================================================

  /**
   * function: updateCounter()
   * desc: helper function that updates UI when needed
   */
  function updateCounter() {
    counter.text(count);
    updateShop();
  }

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
      numberOfClicksToNextLevel = Math.floor(numberOfClicksToNextLevel*1.5);
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
});
