
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

var shop_list = document.querySelectorAll(".shopController");
for (var i = 0; i < shop_list.length; i++) {
shop_list[i].addEventListener("click", function (e) {
openShopWindow(this.getAttribute("data-origin"));
e.preventDefault();
});
}

var shop_list_close = document.querySelectorAll(".shopCloseController");
for (var i = 0; i < shop_list_close.length; i++) {
shop_list_close[i].addEventListener("click", function (e) {
closeShopWindow(this.getAttribute("data-origin"));
e.preventDefault();
});
}

function openShopWindow(origin){
  var activatedContainer = document.getElementById(origin);
  activatedContainer.classList.add("shopOpen");
}

function closeShopWindow(origin){
  var activatedContainer = document.getElementById(origin);
  activatedContainer.classList.remove("shopOpen");
}
//Raw Material farming
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


var base_resource = document.querySelectorAll(".miner");
for (var i = 0; i < base_resource.length; i++) {
base_resource[i].addEventListener("click", function (e) {
mineRaw(this.getAttribute("data-origin"));
e.preventDefault();
});
}

function mineRaw(origin){
  var luckRoll = (Math.floor((Math.random() * 250) + 1));
  if (origin === "bamboo"){
    bamboo++
    document.getElementById("itemInventoryBamboo").innerHTML = bamboo;
    if (luckRoll >= 200){
      jute++
      document.getElementById("itemInventoryJute").innerHTML = jute;
    }else if (luckRoll >= 100 && luckRoll < 200){
      bamboo++
      document.getElementById("itemInventoryBamboo").innerHTML = bamboo;  
    }else{
      food++
      water++
      document.getElementById("currentFood").innerHTML = food;
      document.getElementById("currentWater").innerHTML = water;
    }
  }
  else if (origin === "wood"){
    wood++
    document.getElementById("itemInventoryWood").innerHTML = wood;
    document.getElementById("currentWood").innerHTML = wood;
    if (luckRoll >= 200){
      vine++
      document.getElementById("itemInventoryLiana").innerHTML = vine;
    }else if (luckRoll >= 100){
      palmLeaf++
      document.getElementById("itemInventoryPalmLeaf").innerHTML = palmLeaf;  
    }else{
      
    }
  }else if (origin === "stone"){
    stone++
    document.getElementById("itemInventoryStone").innerHTML = stone;
    document.getElementById("currentStone").innerHTML = stone;
      if (luckRoll >= 240){
      resen++
      document.getElementById("itemInventoryResin").innerHTML = resen;
    }else if (luckRoll >= 100){
    stone++
    document.getElementById("itemInventoryStone").innerHTML = stone;
    document.getElementById("currentStone").innerHTML = stone;  
    }else{
      
    }
  }else if (origin === "iron"){
    iron++
    document.getElementById("itemInventoryIron").innerHTML = iron;
    document.getElementById("currentIron").innerHTML = iron;
  }
}
