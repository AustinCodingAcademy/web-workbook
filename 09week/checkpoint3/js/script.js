//starting code execution after page loads
$(document).ready(function() {

  //Javascript Object containing game data
  var data = {
    cookiesOwned: 0,
    cps: 0, //cookies per second
    cursorsOwned: 0,
    grandmasOwned: 0,
    farmsOwned: 0,
    factoriesOwned: 0
  };
updateCookies();
//creating setInterval method that calls iteration function every 1 second
setInterval(iteration, 1000);

function iteration() {
  data.cookiesOwned += data.cps; // add cps to currently owned cookies
  updateCookies();
}

$('#cookie').click(cookieClicked); //attaches a cookieClicked function to run when a click event occurs

function cookieClicked() {
  data.cookiesOwned ++; //increases data.cookiesOwned by 1;
  updateCookies(); //calls updateCookies function
}


$('.box').click(boxClicked); //attaches a boxClicked function to run when a click event occurs


function boxClicked() {
  var currentCost = parseInt($(this).data("cost")); //take current cost of selected box and parse it to integer
  if (data.cookiesOwned >= currentCost ) { //if you own more cookies than a cost
    data.cookiesOwned -= currentCost;
    currentCost = parseInt(currentCost * 1.2); //multiplies cost by 1.2
    $(this).data("cost", currentCost); //inserts new cost into "data-cost" property
    $(this).children('span').text(currentCost); //inserts new cost into HTML document
    data.cps += parseInt($(this).data("cps"));  //increases cps
    $('#cps').children('span').text(data.cps);

    //if/else chain that takes care of counting owned tools
    if (this.className === "box 1") {
      data.cursorsOwned ++;
      $('#cursor').text('You have ' + data.cursorsOwned + ' cursors!');
    } else if (this.className === "box 2") {
      data.grandmasOwned ++;
      $('#grandma').text('You have ' + data.grandmasOwned + ' grandmas!');
    } else if (this.className === "box 3") {
      data.farmsOwned ++;
      $('#farm').text('You have ' + data.farmsOwned + ' farms!');
    } else {
      data.factoriesOwned ++;
      $('#factory').text('You have ' + data.factoriesOwned + ' factories!');
    }

    updateCookies();

  } else {
    alert("You don't have enough cookies!");
  }
}

//updates HTML document in regard to owned cookies
function updateCookies() {
  if (data.cookiesOwned === 1) {
    $('#currentTotal').text('You have ' + data.cookiesOwned + ' cookie!');
  } else {
    $('#currentTotal').text('You have ' + data.cookiesOwned + ' cookies!');
  }
}

})
