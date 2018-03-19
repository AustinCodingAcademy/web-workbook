'use strict';

$(document).ready(function () {

  // initial condition


  let kW = 0;
  let prevkW = parseInt(localStorage.getItem('kW'));

  if (prevkW) {
    kW = prevkW;
    updateKW(kW);
  } else {
    kW = 0;
  }

  let clickrate = 1;
  let autorate = 0;
  let currentkW = 0;
  let currentcost = 0;
  let currentrate = 0;
  let nextcost=0;

  let equip = 0,
    whichequip = 0,
    panels = 0,
    roofs = 0,
    farms = 0,
    roads = 0,
    water = 0,
    sat = 0,
    moon = 0,
    bigsat = 0;
  let equiphas=[0, 0, 0, 0,0,0, 0, 0, 0];
  let equipcost = [0, 10, 35, 50, 180, 500, 2500, 7000, 10000];
  let equipval = [0, 0.1, 3, 20, 60, 100, 420, 800, 1000];

  let buff = 0,
    sunshine = 0,
    battery = 0,
    photo = 0,
    helio = 0,
    float = 0,
    lens = 0;

  //  clicks
  $('.solarpanel').on("click", function () {
    updateKW(clickrate);
  });

  // $('[equip]').hover( function () {
  //   // $(this).css('cursor', 'pointer');
  //   $(`.eqdetails`).css('display','block');
  // })

  $('[equp]').hover(
  function() {
    $( this ).css( 'backgroundColor', 'blue');
  }, function() {
    $( this ).css( 'backgroundColor', 'green' );
  }
);


  $('[equip]').on("click", function () {
    equip = $(this).attr('equip');
    whichequip = ($(this).index()) + 1;
    if (check(equip, whichequip)) {
      currentcost = (equipcost[whichequip]);
      currentrate = precisionRound(equipval[whichequip], 1);
      updateKW(currentcost*-1);
      updateProd(currentrate);

      nextcost = Math.floor(1.8 * Math.pow(1.2,currentcost));
      console.log(`${equip} was ${currentcost}, will be ${nextcost}`);

      equipcost[whichequip]=nextcost;
      equiphas[whichequip]=equiphas[whichequip]+1;

      $('.eqcost').text(nextcost);
    };
  });

  window.setInterval(function () {
    updateKW(currentrate)
  }, 1000);

  function updateKW(value) {
    kW = precisionRound(kW + value,1);
    $('.availablelevel').text(kW);
  }

  function updateProd(value) {
    autorate = precisionRound(autorate + value,1);
    $('.productionlevel').text(autorate);
  }

  function check(item, itempos) {
    let currentcost = equipcost[itempos];
    if (kW > equipcost[itempos]) {
      return true;
    } else {
      return false;
    }
  };

  function precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  //save solargame
  $('button').on("click", function () {
    localStorage.setItem("kW", kW);
  });


  // end ready dom
});
