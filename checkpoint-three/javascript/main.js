
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
//--------------------------------------Open/Close Buildings

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

var bamboo = 0;
var wood = 0;
var stone = 0;
var iron = 0;

var base_resource = document.querySelectorAll(".miner");
for (var i = 0; i < base_resource.length; i++) {
base_resource[i].addEventListener("click", function (e) {
mineRaw(this.getAttribute("data-origin"));
e.preventDefault();
});
}

function mineRaw(origin){
  if (origin === "bamboo"){
    bamboo++
    document.getElementById("itemInventoryBamboo").innerHTML = bamboo;
  }
  else if (origin === "wood"){
    wood++
    document.getElementById("itemInventoryWood").innerHTML = wood;
    document.getElementById("currentWood").innerHTML = wood;
  }else if (origin === "stone"){
    stone++
    document.getElementById("itemInventoryStone").innerHTML = stone;
    document.getElementById("currentStone").innerHTML = stone;
  }else if (origin === "iron"){
    iron++
    document.getElementById("itemInventoryIron").innerHTML = iron;
    document.getElementById("currentIron").innerHTML = iron;
  }
}
