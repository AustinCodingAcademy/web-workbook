function navBar() {
    var containerName = document.getElementById("container").className;
    // document.getElementById("container").style.transition = "all 2s"
    // document.getElementById("container").style.gridTemplateColumns = "150px auto auto auto auto";
    
  switch (containerName) {
    case "containerstyle":
      document.getElementById("container").className = "navstyle";
      document.getElementById("navcol").style.display = "flex";
      document.getElementById("container").style.transition = "all 2s";  
      break;
    case "navstyle":
      document.getElementById("container").className = "containerstyle";
      document.getElementById("navcol").style.display = "none";
      document.getElementById("container").style.transition = "all 2s";
      break;
  }
}
