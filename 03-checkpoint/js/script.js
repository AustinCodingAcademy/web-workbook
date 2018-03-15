$(function() {
  //vars
  var btc = 0;
  var minersOwned = 0;
  var minersUpgrade = 0.00001;
  var ticks;

  //check if localstorage vals exist
  if (localStorage.getItem('btc') !== null) {
    btc = parseFloat(localStorage.getItem('btc'));
    updateDisplay();
  }
  if (localStorage.getItem('minersOwned') !== null) {
    minersOwned = parseInt(localStorage.getItem('minersOwned'));
    updateDisplay();
  }
  if (localStorage.getItem('minersUpgrade') !== null) {
    minersUpgrade = parseFloat(localStorage.getItem('minersUpgrade'));
    updateDisplay();
  }


  //set timer for miners
  ticks = window.setInterval(function() {
    var amt = minersOwned * (minersUpgrade);
    //console.log(minersOwned + " " + minersUpgrade);
    mathBtc("add", amt);
    //console.log("You've mined " + amt.toFixed(5) + " BTC");
  }, 1000);

  //updates btc counter
  function updateDisplay() {
    checkButtonsEnabled();
    $("#btc-display").text(btc.toFixed(5));
    $("#owned-display").text(minersOwned);
    $("#rate-display").text(minersUpgrade.toFixed(5));
  }

  //check if buttons should be disabled
  function checkButtonsEnabled(){
     //console.log("checked buttons")
     if (btc < .001) {
            $("#btn-buy").attr("disabled", "disabled");
        } else {
            $("#btn-buy").removeAttr("disabled", "disabled");
        }

     if (btc < .001 || minersOwned < 1) {
            $("#btn-upgrade").attr("disabled", "disabled");
        } else {
            $("#btn-upgrade").removeAttr("disabled", "disabled");
        }
     }

  //helper to add/sub from btc total
  function mathBtc(operator, amount) {
    switch (operator) {
      case "add":
        btc += amount;
        localStorage.btc = btc;
        updateDisplay();
        break;
      case "sub":
        btc -= amount;
        localStorage.btc = btc;
        updateDisplay();
        break;
      default:
        alert("mathBTC() not passed correct operator!")
    }
  }

  //main button click
  $("#btn-click").click(function() {
    mathBtc("add", 0.00001);
    updateDisplay();
  });
  //clear save button click
  $("#btn-clear").click(function() {
      btc = 0;
      localStorage.btc = 0;
      minersOwned = 0;
      localStorage.minersOwned = 0;
      minersUpgrade = 0.00001;
      localStorage.minersUpgrade = 0.00001;
      updateDisplay();
  });
  //buy miners button click
  $("#btn-buy").click(function() {
    if (btc >= .001) {
      mathBtc("sub", .001)
      minersOwned += 1;
      localStorage.minersOwned = minersOwned;
      updateDisplay();
    }
  });
  //upgrade miners button click
  $("#btn-upgrade").click(function() {
    if (btc >= .001) {
      mathBtc("sub", .001)
      minersUpgrade += .00001;
      localStorage.minersUpgrade = minersUpgrade;
      updateDisplay();
    }
  });
















  //code from MDN to check if local storage available

  function storageAvailable(type) {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }

  if (storageAvailable('localStorage')) {
    console.log("local storage available!");
  } else {
    console.log("local storage not available!");
  }

}); //end jquery ready
