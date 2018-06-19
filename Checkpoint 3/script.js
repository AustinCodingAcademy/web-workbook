
function update() {
  //this prints out the number of clicks you did to the title and input
  document.getElementById('text').value = cookiecount;
  document.title = cookiecount + " Cookies";

  document.getElementById('ammountMultiplier').innerHTML = "Multiplier Upgrade x" + (multiplier+1);
  document.getElementById('ammountMultiplier2').innerHTML = "x" + (multiplier+1);
  document.getElementById('costMultiplier').innerHTML = ((multiplier+1) * 100) + " Cookies";
  document.getElementById('currentMultiplier').innerHTML = "Your current Multiplier is x" + (multiplier);
  //Tells you how many auto clickers you own
  document.getElementById('ammountAutoClick').innerHTML = "You Own " + autoClick + " Auto Clickers";
  document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12) + " Cookies";
  //Tells you how many farms you own
  document.getElementById('ammountFarms').innerHTML = "You Own " + farms + " Farms";
  document.getElementById('costFarms').innerHTML = ((farms+1) * 15) + " Cookies";
  //tells you how many cookies per sec/auto click you are making
  document.getElementById('cookiespersecond').innerHTML = "You are gaining " + (((autoClick)+(farms*2))*multiplier) + " Cookies per/s";
}
//variable list
var multiplier = 1;
var cookiecount = 0;
var autoClick = 0;
var farms = 0;

function timer() {
  //continius looping through to update the amount
  cookiecount = cookiecount + autoClick*multiplier;
  cookiecount = cookiecount + farms*2*multiplier;
  update()
}
//this makes sure the function updates every second
setInterval(timer, 1000)

//Everytime Trump is clicked the counter goes up by one
function add() {
  cookiecount = cookiecount + 1
  update()
}

function save() {
  //saves the amount of clicks to the browser
  localStorage.setItem("cookiecount", cookiecount);
  localStorage.setItem("autoClick", autoClick);
  localStorage.setItem("farms", farms);
  localStorage.setItem("multiplier", multiplier);
}
function load() {
  //loads the saved clicks
  cookiecount = localStorage.getItem("cookiecount");
  //converts string to interger
  cookiecount = parseInt(cookiecount);
  //auto click storage
  autoClick = localStorage.getItem("autoClick");
  autoClick = parseInt(autoClick);
  //farm storage
  farms = localStorage.getItem("farms");
  farms = parseInt(farms);
  //multiplier storage
  multiplier = localStorage.getItem("multiplier");
  multiplier = parseInt(multiplier);
  update()
}

function buyAutoClick() {
  //lets you buy an auto clicker
  if (cookiecount >= ((autoClick+1) * 12)) {
    cookiecount = cookiecount - ((autoClick+1) * 12);
    autoClick = autoClick + 1;
    update()
  }
}

function buyFarm() {
  // buy farm function rules/logic
  if (cookiecount >= ((farms+1) * 15)) {
    cookiecount = cookiecount - ((farms+1) * 15);
    farms = farms + 1;
    update()
  }
}

function buyMultiplier() {
  // buy multiplier function rules/logic
  if (cookiecount >= ((multiplier+1) * 100)) {
    cookiecount = cookiecount - ((multiplier+1) * 50);
    multiplier = multiplier + 1;
    update()
  }
}
