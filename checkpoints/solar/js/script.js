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
  let nextcost = 0;

  let equip = 0,
    whichequip = 0,
    panels = 0,
    roofs = 0,
    farms = 0,
    plant = 0,
    roads = 0,
    water = 0,
    sat = 0,
    moon = 0;
  let equiphas = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  let equipcost = [0, 10, 35, 50, 180, 500, 2500, 7000, 10000];
  let equipval = [0, 0.1, 3, 20, 60, 100, 420, 800, 1000];

  let tech = 0,
    whichtech = 0,
    buff = 0,
    sunshine = 0,
    battery = 0,
    photo = 0,
    helio = 0,
    float = 0,
    lens = 0;
  let techhas = [0, 0, 0, 0, 0, 0, 0];
  let techcost = [0, 75, 130, 275, 500, 700, 1200];
  let techval = [0, 2, 5, 3, 2, 2, 2];

  //  clicks
  $('.solarpanel').on("click", function () {
    updateKW(clickrate);
  });


  // equipment

  $('[equip]').hover(
    function () {
      $(this).find('div.eqdetails').css('display', 'block');
    },
    function () {
      $(this).find('div.eqdetails').css('display', 'none');
    }
  );


  $('[equip]').on("click", function () {
    equip = $(this).attr('equip');
    whichequip = ($(this).index()) + 1;
    if (checkequip(whichequip)) {
      currentcost = (equipcost[whichequip]);
      currentrate = precisionRound(equipval[whichequip], 1);
      updateKW(currentcost * -1);
      updateProd(currentrate);

      nextcost = Math.floor(1.8 * Math.pow(1.2, currentcost));

      equipcost[whichequip] = nextcost;
      equiphas[whichequip] = equiphas[whichequip] + 1;
      equipval[whichequip] = equipval[whichequip] + currentrate;

      switch (equip) {
      case 'panel':
        panels = panels + 1;
        $('[tech="sunny"]').removeClass('unavail');
        break;
      case 'roofs':
        roofs = roofs + 1;
        $('[tech="photo"]').removeClass('unavail');
        break;
      case 'farms':
        farms = farms + 1;
        $('[tech="helio"]').removeClass('unavail');
        break;
      case 'plant':
        plant = plant + 1;
        $('[tech="battery"]').removeClass('unavail');
        break;
      case 'roads':
        roads = roads + 1;
        break;
      case 'water':
        water = water + 1;
        $('[tech="float"]').removeClass('unavail');
        break;
      case 'sat':
        sat = sat + 1;
        $('[tech="lens"]').removeClass('unavail');
        break;
      case 'moon':
        moon = moon + 1;
        break;
      }


      $(this).find('.eqcost').text(nextcost);
      $(this).find('.eqmakes').removeClass('noshow');
      $(this).find('.eqhas').text(panels);
      $(this).find('.eqpower').text(panels * currentrate);

    };
  });

  // buffs


  $('[tech]').on("click", function () {
    tech = $(this).attr('tech');
    whichtech = ($(this).index()) + 1;

    if (checktech(tech, whichtech)) {

      equipval[whichequip] = equipval[whichequip] * (techval[whichtech] * .1);
      $(this).addClass('noshow');
    };
  });


  // helper functions
  window.setInterval(function () {
    updateKW(currentrate)
  }, 1000);

  function updateKW(value) {
    kW = precisionRound(kW + value, 1);
    $('.availablelevel').text(kW);
  }

  function updateProd(value) {
    autorate = precisionRound(autorate + value, 1);
    $('.productionlevel').text(autorate);
  }

  function checkequip(itempos) {
    if (kW > equipcost[itempos]) {
      return true;
    } else {
      return false;
    }
  };

  function checktech(thing, thingpos) {
    let allowed = $(`[tech=${thing}]`).hasClass("unavail");
    console.log(`${allowed}`);
    if (!(allowed) && (kW > techcost[thingpos])) {
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
