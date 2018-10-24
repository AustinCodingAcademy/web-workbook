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
