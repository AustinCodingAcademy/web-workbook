function showhide()
{
  let div = document.getElementById("vertical-nav-bar");
  if (div.style.display === "flex") {
    div.style.display = "none";
  } else {
    div.style.display = "flex";
  }
}
