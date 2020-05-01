//raw mats
var bamboo = 0;
var wood = 0;
var stone = 0;
var iron = 0;
var jute = 0;
var palmLeaf = 0;
var vine = 0;
var resen = 0;
var food = 0;
var water = 0;
//items
var items = {
  fireWood: 0,
  stoneBlock: 0,
  dryedJute: 0,
  torch: 0,
  jackPlane: 0,
  bucket: 0,
  plank: 0,
  rope: 0,
  ropeLadder: 0,
  mat: 0,
  wickerBasket: 0,
  woodenLattice: 0,
  ceramicLantern: 0,
  ceramicPot: 0,
  cog: 0,
  lampOil: 0,
  glassBottle: 0,
  lense: 0,
  string: 0,
  cloth: 0
};

// --------------------------------------Open/Close Inventory
var openInventoryButton = document.querySelector(".inventoryOpenButton");
openInventoryButton.addEventListener("click", function(e) {
  openInventory();
  e.preventDefault();
});

var closeInventoryButton = document.getElementById("exitInventory");
closeInventoryButton.addEventListener("click", function(e) {
  closeInventory();
  e.preventDefault();
});


function openInventory() {
  var invContainer = document.getElementById("fullInventory");
  invContainer.style.display = "flex";
}

function closeInventory() {
  var invContainer = document.getElementById("fullInventory");
  invContainer.style.display = "none";
}
//---------------------------------------Open/Close Buildings
var openShops = ["outpost"];
var closedShops = ["woodWorkShop", "quarry", "hunter", "weaver", "well", "dryer", "pottery", "smithy", "lure", "loom", "glass", "pier"]

var shop_list = document.querySelectorAll(".shopController");
for (var i = 0; i < shop_list.length; i++) {
  shop_list[i].addEventListener("click", function(e) {
    openShopWindow(this.getAttribute("data-origin"));
    e.preventDefault();
  });
}

var shop_list_close = document.querySelectorAll(".shopCloseController");
for (var i = 0; i < shop_list_close.length; i++) {
  shop_list_close[i].addEventListener("click", function(e) {
    closeShopWindow(this.getAttribute("data-origin"));
    e.preventDefault();
  });
}

function openShopWindow(origin) {
  for (i = 0; i <= openShops.length; i++) {
    if (openShops[i] === origin) {
      var activatedContainer = document.getElementById(origin);
      activatedContainer.classList.add("shopOpen");
    } else {

    }
  }
  for (i = 0; i <= closedShops.length; i++) {
    if (closedShops[i] === origin) {
      openAShop(origin);
    } else {

    }
  }
}

function closeShopWindow(origin) {
  var activatedContainer = document.getElementById(origin);
  activatedContainer.classList.remove("shopOpen");
}

function openAShop(origin) {
  switch (origin) {
    case "woodWorkShop":
      constructWoodWorkshop(origin);
      break;
    case "quarry":
      constructQuarry(origin);
      break;
    case "hunter":
      constructHunter(origin);
      break;
    case "weaver":
      constructWeaver(origin);
      break;
    case "well":
      constructWell(origin);
      break;
    case "dryer":
      constructDryer(origin);
      break;
    case "pottery":
      constructPottery(origin);
      break;
    case "smithy":
      constructSmithy(origin);
      break;
    case "lure":
      constructLure(origin);
      break;
    case "loom":
      constructLoom(origin);
      break;
    case "glass":
      constructGlass(origin);
      break;
    case "pier":
      constructPier(origin);
      break;
  }
}

function constructWoodWorkshop(origin) {
  var current = document.getElementById("inGame" + origin);
  if (bamboo >= 1000 && wood >= 1000 && jute >= 100) {
    bamboo -= 1000;
    wood -= 1000;
    jute -= 100;
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "woodWorkShop") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("woodWorkShop");
    // console.debug(closedShops);
    // console.debug(openShops);
    alert("Congratulations, You have unlocked the wood workshop.");
  } else {
    alert("This building requires 1000 wood, 1000 bamboo, and 100 jute.");
  }
}

function constructQuarry(origin) {
  var current = document.getElementById("inGame" + origin);
  if (bamboo >= 1000 && wood >= 1000 && stone >= 1000) {
    bamboo -= 1000;
    wood -= 1000;
    stone -= 1000;
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "quarry") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("quarry");
    alert("Congratulations, You have unlocked the quarry.");
  } else {
    alert("This building requires 1000 wood, 1000 stone, and 1000 bamboo.");
  }
}

function constructHunter(origin) {
  var current = document.getElementById("inGame" + origin);
  if (bamboo >= 1000 && resen >= 100 && jute >= 200) {
    bamboo -= 1000;
    resen -= 100;
    jute -= 200;
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "hunter") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("hunter");
    alert("Congratulations, You have unlocked the hunters tent.");
  } else {
    alert("This building requires 1000 bamboo, 100 resin, and 200 jute.");
  }

}

function constructWeaver(origin) {
  var current = document.getElementById("inGame" + origin);
  if (wood >= 1000 && items.stoneBlock >= 200 && items.plank >= 200 && items.dryedJute >= 200) {
    wood -= 1000;
    items.stoneBlock -= 200;
    items.plank -= 200;
    items.dryedJute -= 200;
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "weaver") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("weaver");
    alert("Congratulations, You have unlocked the weaving workshop.");
  } else {
    alert("This building requires 200 planks, 200 stone blocks, 1000 wood, and 200 dried Jute.");
  }

}

function constructWell(origin) {
  var current = document.getElementById("inGame" + origin);
  if (items.stoneBlock >= 500 && items.rope >= 200 && items.plank >= 100 && items.bucket >= 1) {
    items.stoneBlock -= 500;
    items.rope -= 500;
    items.plank -= 100;
    items.bucket -= 1;
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "well") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("well");
    alert("Congratulations, You have unlocked the well.");
  } else {
    alert("This building requires 100 planks, 500 stone blocks, a bucket, and 200 feet of rope.");
  }
}

function constructDryer(origin) {
  var current = document.getElementById("inGame" + origin);
  if (items.woodenLattice >= 200 && items.wickerBasket >= 200 && items.plank >= 200 && bamboo >= 500 && items.dryedJute >= 200) {
    items.woodenLattice -= 200;
    items.wickerBasket -= 200;
    items.plank -= 200
    bamboo -= 500
    items.dryedJute -= 200;
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "dryer") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("dryer");
    alert("Congratulations, You have unlocked the food drier.");
  } else {
    alert("This building requires 200 planks, 200 wicker baskets, 500 bamboo, 200 wooden lattices, and 200 dried Jute.");
  }
}

function constructPottery(origin) {
  var current = document.getElementById("inGame" + origin);
  if (items.stoneBlock >= 1000 && items.plank >= 1000 && items.dryedJute >= 300) {
    items.stoneBlock -= 1000;
    items.plank -= 1000;
    items.dryedJute -= 300;
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "pottery") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("pottery");
    alert("Congratulations, You have unlocked the pottery workshop.");
  } else {
    alert("This building requires 1000 stone blocks, 1000 wooden planks, and 300 dried jute.");
  }
}

function constructSmithy(origin) {
  var current = document.getElementById("inGame" + origin);
  if (items.stoneBlock >= 1500 && iron >= 1500 && items.mat >= 300) {
    items.stoneBlock -= 1500;
    items.mat -= 300;
    iron -= 1500;
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "smithy") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("smithy");
    alert("Congratulations, You have unlocked the smithy.");
  } else {
    alert("This building requires 1500 stone blocks, 1500 iron, and 300 mats.");
  }
}

function constructLure(origin) {
  var current = document.getElementById("inGame" + origin);
  if (items.string >= 500 && items.cloth >= 250 && items.plank >= 500 && iron >= 1000) {
    items.string -= 500;
    items.cloth -= 250;
    items.plank -= 500;
    iron -= 1000;
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "lure") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("lure");
    alert("Congratulations, You have unlocked the lure workbench.");
  } else {
    alert("This building requires 500 wooden planks, 500 string, 250 cloth, and 1000 iron.");
  }
}

function constructLoom(origin) {
  var current = document.getElementById("inGame" + origin);
  if (items.dryedJute >= 500 && items.cog >= 250 && items.plank >= 500 && iron >= 1000) {
    items.dryedJute -= 500;
    items.cog -= 250;
    items.plank -= 500;
    iron -= 1000;
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "loom") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("loom");
    alert("Congratulations, You have unlocked the loom.");
  } else {
    alert("This building requires 500 wooden planks, 500 dried jute, 250 cogs, and 1000 iron.");
  }
}

function constructGlass(origin) {
  var current = document.getElementById("inGame" + origin);
  if (items.stoneBlock >= 1000 && iron >= 1000 && items.plank >= 500 && items.mat >= 500) {
    items.stoneBlock -= 1000;
    items.plank -= 500;
    items.mat -= 500;
    iron -= 1000;
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "glass") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("glass");
    alert("Congratulations, You have unlocked the glass-blowers workshop.");
  } else {
    alert("This building requires 1000 stone blocks, 1000 iron, 500 wooden planks, and 500 mats.");
  }
}

function constructPier(origin) {
  var current = document.getElementById("inGame" + origin);
  if (items.stoneBlock >= 2000 && items.plank >= 1500 && items.cloth >= 750 && items.string >= 750) {
    current.classList.remove("shopClosed");
    for (i = 0; i <= closedShops.length; i++) {
      if (closedShops[i] === "pier") {
        closedShops.splice(i, 1);
      }
    }
    openShops.push("pier");
    alert("Congratulations, You have unlocked the pier.");
  } else {
    alert("This building requires 750 cloth, 750 string, 1500 wooden planks, and 2000 stone blocks.");
  }
}


//Raw Material farming
var base_resource = document.querySelectorAll(".miner");
for (var i = 0; i < base_resource.length; i++) {
  base_resource[i].addEventListener("click", function(e) {
    mineRaw(this.getAttribute("data-origin"));
    e.preventDefault();
  });
}

function mineRaw(origin) {
  var luckRoll = (Math.floor((Math.random() * 250) + 1));
  if (origin === "bamboo") {
    bamboo++
    document.getElementById("itemInventoryBamboo").innerHTML = bamboo;
    if (luckRoll >= 200) {
      jute++
      document.getElementById("itemInventoryJute").innerHTML = jute;
    } else if (luckRoll >= 100 && luckRoll < 200) {
      bamboo += 10;
      document.getElementById("itemInventoryBamboo").innerHTML = bamboo;
    } else {
      food++
      water++
      document.getElementById("currentFood").innerHTML = food;
      document.getElementById("currentWater").innerHTML = water;
    }
  } else if (origin === "wood") {
    wood++
    document.getElementById("itemInventoryWood").innerHTML = wood;
    document.getElementById("currentWood").innerHTML = wood;
    if (luckRoll >= 200) {
      vine++
      document.getElementById("itemInventoryLiana").innerHTML = vine;
      wood += 10;
      document.getElementById("itemInventoryWood").innerHTML = wood;
      document.getElementById("currentWood").innerHTML = wood;
    } else if (luckRoll >= 100) {
      palmLeaf++
      document.getElementById("itemInventoryPalmLeaf").innerHTML = palmLeaf;
      wood += 5;
      document.getElementById("itemInventoryWood").innerHTML = wood;
      document.getElementById("currentWood").innerHTML = wood;
    } else {

    }
  } else if (origin === "stone") {
    stone++
    document.getElementById("itemInventoryStone").innerHTML = stone;
    document.getElementById("currentStone").innerHTML = stone;
    if (luckRoll >= 200) {
      resen++
      document.getElementById("itemInventoryResin").innerHTML = resen;
    } else if (luckRoll >= 100) {
      stone += 10;
      document.getElementById("itemInventoryStone").innerHTML = stone;
      document.getElementById("currentStone").innerHTML = stone;
    } else {

    }
  } else if (origin === "iron") {
    iron++
    document.getElementById("itemInventoryIron").innerHTML = iron;
    document.getElementById("currentIron").innerHTML = iron;
    if (luckRoll >= 200) {
      iron += 10;
      document.getElementById("itemInventoryIron").innerHTML = iron;
      document.getElementById("currentIron").innerHTML = iron;
    } else if (luckRoll >= 100) {
      iron += 5;
      document.getElementById("itemInventoryIron").innerHTML = iron;
      document.getElementById("currentIron").innerHTML = iron;
    } else {

    }
  }

}


//item miner

var base_resource = document.querySelectorAll(".itemMiner");
for (var i = 0; i < base_resource.length; i++) {
  base_resource[i].addEventListener("click", function(e) {
    mineItem(this.getAttribute("data-origin"));
    e.preventDefault();
  });
}

function mineItem(origin) {
  switch (origin) {
    case "fireWood":
      if (wood >= 2) {
        wood -= 2;
        updater();
        mine(origin);
      } else {
        alert("Not enough Wood. This requires 2 wood.")
      }
      break;
    case "stoneBlock":
      if (stone >= 10) {
        stone -= 10;
        updater();
        mine(origin);
      } else {
        alert("Not enough stone. This requires 10 stone.")
      }
      break;
    case "dryedJute":
      if (jute >= 5 && items.fireWood >= 2) {
        jute -= 5;
        items.fireWood -= 2
        updater();
        mine(origin);
      } else {
        alert("Not enough jute. This requires 5 jute.")
      }
      break;
    case "jackPlane":
      if (wood >= 1 && iron >= 1) {
        wood--;
        iron--;
        updater();
        mine(origin);
      } else {
        alert("Not Enough materials. this requires 1 wood and 1 iron.")
      }
      break;
    case "bucket":
      if (wood >= 4 && resen >= 2) {
        wood -= 4;
        resen -= 2;
        updater();
        mine(origin);
      } else {
        alert("Not Enough materials. this requires 4 wood and 2 resin.")
      }
      break;
    case "plank":
      if (wood >= 5 && items.jackPlane >= 1) {
        wood -= 5;
        items.jackPlane--;
        updater();
        mine(origin);
      } else {
        alert("Not enough materials. This requires 5 wood and a jack plane.")
      }
      break;
    case "rope":
      if (vine >= 10 && resen >= 3) {
        updater();
        mine(origin);
      } else {
        alert("Not enough materials. This requires 10 vines and 3 resin.")
      }
      break;
    case "ropeLadder":
      if (items.rope >= 10 && items.plank >= 5) {
        items.rope -= 10;
        items.plank -= 5;
        updater();
        mine(origin);
      } else {
        alert("Not enough materials. This item requires 10 rope and 5 planks")
      }
      break;
    case "mat":
      if (palmLeaf >= 10) {
        palmLeaf -= 10;
        updater();
        mine(origin);
      } else {
        alert("Not Enough palm leaves. This item requires 10 palm leaves.")
      }
      break;
    case "wickerBasket":
      if (palmLeaf >= 20) {
        palmLeaf -= 20;
        updater();
        mine(origin);
      } else {
        alert("Not Enough palm leaves. This item requires 20 palm leaves.")
      }
      break;
    case "woodenLattice":
      if (wood >= 100 && items[rope] >= 10) {
        wood -= 10;
        items.rope -= 10;
        updater();
        mine(origin);
      } else {
        alert("Not Enough materials. This item requires 100 wood and 10 rope.")
      }
      break;
    case "ceramicLantern":
      if (items.stoneBlock >= 2 && items.fireWood >= 100) {
        items.stoneBlock -= 2;
        items.fireWood -= 100;
        updater();
        mine(origin);
      } else {
        alert("Not Enough materials. This item requires 2 stone block and 100 firewood")
      }
      break;
    case "ceramicPot":
      if (items.stoneBlock >= 2 && items.fireWood >= 100) {
        items.stoneBlock -= 2;
        items.fireWood -= 100;
        updater();
        mine(origin);
      } else {
        alert("Not Enough materials. This item requires 2 stone block and 100 firewood")
      }
      break;
    case "cog":
      if (items.fireWood >= 1000 && iron >= 500) {
        items.fireWood -= 1000;
        iron -= 500;
        updater();
        mine(origin);
      } else {
        alert("Not Enough materials. This requires 1000 fire wood and 500 iron")
      }
      break;
    case "lampOil":
      if (items.fireWood >= 300 && resen >= 100) {
        items.fireWood -= 300;
        resen -= 100;
        updater();
        mine(origin);
      } else {
        alert("Not Enough materials. This requires 300 fire wood and 100 resin")
      }
      break;
    case "glassBottle":
      if (items.stoneBlock >= 10 && items.fireWood >= 500) {
        items.stoneBlock -= 10;
        items.fireWood -= 500;
        updater();
        mine(origin);
      } else {
        alert("Not Enough materials. This requires 10 stone blocks and 500 firewood")
      }
      break;
    case "lense":
      if (items.stoneBlock >= 100 && items.fireWood >= 1000) {
        updater();
        mine(origin);
      } else {
        alert("Not Enough materials. This requires 100 stone blocks and 1000 firewood")
      }
      break;
    case "string":
      if (vine >= 50 && items.fireWood >= 300) {
        vine -= 50;
        items.fireWood -= 300;
        updater();
        updater();
        mine(origin);
      } else {
        alert("Not Enough Wood")
      }
      break;
    case "cloth":
      if (items.string >= 100) {
        items.string -= 100
        updater();
        updater();
        mine(origin);
      } else {
        alert("Not enough string. This requires 100 string")
      }
      break;

  }
}



function mine(origin) {
  document.getElementById("itemInventoryJute").innerHTML = jute;
  document.getElementById("itemInventoryresen").innerHTML = resen;
  document.getElementById("itemInventoryPalmLeaf").innerHTML = palmLeaf;
  items[origin]++;
  var originFormat = origin.charAt(0).toUpperCase() + origin.slice(1);
  document.getElementById("itemInventory" + originFormat).innerHTML = items[origin];
}

function updater() {
  document.getElementById("currentWood").innerHTML = wood;
  document.getElementById("currentStone").innerHTML = stone;
  document.getElementById("currentIron").innerHTML = iron;
}
