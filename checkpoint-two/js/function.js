//Switches name of container in order to display side navigation
function navBar() {
  let containerName = document.getElementById("container").className;

  switch (containerName) {
    case "containerstyle":
      document.getElementById("container").className = "navstyle";
      document.getElementById("navcol").style.display = "block";
      document.getElementById("container").style.transition = "all 2s";
      break;
    case "navstyle":
      document.getElementById("container").className = "containerstyle";
      document.getElementById("navcol").style.display = "none";
      document.getElementById("container").style.transition = "all 2s";
      break;
  }
  let sales = ["Leads", "Vendors", "Statistics"];
  document.getElementsByClassName("section1").value = sales;
}

//This is used to add values to side navigation

window.onload = function loadsales() {
  let sales = ["Leads", "Vendors", "Statistics"];
  let account = ["Information", "Details", "Statistics"];
  let vendors = ["Recent", "List", "Pending"];
  let help = ["Contact", "Questions"];

  let result = "";

  for (var i = 0; i < sales.length; i++) {
    result += "<div class='navlist'>" + sales[i] + "</div>";
  }
  document.getElementById("saleslist").innerHTML = result;
  result = "";

  for (var i = 0; i < account.length; i++) {
    result += "<div class='navlist'>" + account[i] + "</div>";
  }
  document.getElementById("accountlist").innerHTML = result;
  result = "";

  for (var i = 0; i < vendors.length; i++) {
    result += "<div class='navlist'>" + vendors[i] + "</div>";
  }
  document.getElementById("vendorlist").innerHTML = result;
  result = "";

  for (var i = 0; i < help.length; i++) {
    result += "<div class='navlist'>" + help[i] + "</div>";
  }
  document.getElementById("helplist").innerHTML = result;
  result = "";
};

//Used to hide or display home message
function hide() {
  let selection = event.target.id;
  if (selection != "h1") {
    for (var i = 0; i < 4; i++) {
      document.getElementsByClassName("sect")[i].style.display = "inline";
      document.getElementById("home").style.display = "none";
    }
  } else if ((selection = "h1")) {
    for (var i = 0; i < 4; i++) {
      document.getElementsByClassName("sect")[i].style.display = "none";
      document.getElementById("home").style.display = "block";
    }
  }
  if (window.innerWidth < 577){
    document.getElementById("section1id").style.display = "none";
  }
}

// This is used to add or remove nagiation buttons from the top depending on size

function listhead() {
  let sales = ["Leads", "Vendors", "Statistics"];
  let account = ["Information", "Details", "Statistics"];
  let vendors = ["Recent", "List", "Pending"];
  let help = ["Contact", "Questions"];

  let result = "";

  let selection = event.target.id;

  console.log(selection);
  switch (selection) {
    case "listsales":
      document.getElementById("topnav").innerHTML = "";
      for (var i = 0; i < sales.length; i++) {
        result += "<h2 class='toplist'>" + sales[i] + "</h2>";
      }
      document.getElementById("topnav").innerHTML = result;
      hide();
      break;

    case "listaccount":
      document.getElementById("topnav").innerHTML = "";
      for (var i = 0; i < account.length; i++) {
        result += "<h2 class='toplist'>" + account[i] + "</h2>";
      }
      document.getElementById("topnav").innerHTML = result;
      hide();
      break;

    case "listvendors":
      document.getElementById("topnav").innerHTML = "";
      for (var i = 0; i < vendors.length; i++) {
        result += "<h2 class='toplist'>" + vendors[i] + "</h2>";
      }
      document.getElementById("topnav").innerHTML = result;
      hide();
      break;

    case "listhelp":
      document.getElementById("topnav").innerHTML = "";
      for (var i = 0; i < help.length; i++) {
        result += "<h2 class='toplist'>" + help[i] + "</h2>";
      }
      document.getElementById("topnav").innerHTML = result;
      hide();
      break;

    case "h1":
      document.getElementById("topnav").innerHTML = "";
      document.getElementById("topnav").innerHTML = "Home";
      hide();
      break;
  }
}
