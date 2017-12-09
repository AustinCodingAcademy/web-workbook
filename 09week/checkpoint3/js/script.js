var data = {
  cookiesOwned: 0,
  cps: 0
};

setInterval(iteration,1000);

function iteration() {


}

$(document).ready(function(){

  var data = {
    cookiesOwned: 0,
    cps: 0
  };

  setInterval(iteration, 1000);

  function iteration() {


  }

$('#cookie').click(cookieClicked);

function cookieClicked() {
  data.cookiesOwned ++;
  updateCookies();
}

$('.box').click(function() {
  var currentCost = parseInt($(this).attr("data-cost"));
  if (data.cookiesOwned >= currentCost ) {
    data.cookiesOwned -= currentCost;
    updateCookies();
  } else {
    alert("You don't have enough cookies!");
  }
})

function updateCookies() {
  if (data.cookiesOwned === 1) {
    $('#currentTotal').text('You have ' + data.cookiesOwned + ' cookie!');
  } else {
    $('#currentTotal').text('You have ' + data.cookiesOwned + ' cookies!');
  }
}

})
