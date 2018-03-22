function responsive() {
  let x = document.getElementById("myAcNav");
  if (x.className === "ac-nav") {
    x.className += "responsive";
  } else {
    x.className = "ac-nav";
  }
}
