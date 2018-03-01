function responsive() {
    let x = document.getElementById("myAc-nav");
    if (x.className === "ac-nav") {
        x.className += "responsive";
    } else {
        x.className = "ac-nav";
    }
}
