'use strict';


  //VARIABLES
    let clicks = 0; //increment this by one every click
    let auto_clicks = 0; //auto click once per second
    let cost = 100; //cost of sack
    let costOfElves = 1000; //Cost of Elves
    let costOfCoco = 10//cost of coco
    let upgrade_cost = 10000;//cost of reindeers
    let reindeer_number = 0; //the level of the reindeer upgrade
    let sacksBought = 0; //number of sacks bought
    let elvesBought = 0; //number of elves bought
    let cocoBought = 0; //number of coco bought
    let click_rate = 1000; // ms between each autoclick
    let interval_auto; //storing our interval here so we can update it
    let click_increment = 1; //how many clicks per click


    //FUNCTIONS 

    //Updat the number of clicks
    function update_total_clicks(){
      let e = document.getElementById('total_clicks');
      e.innerHTML = clicks;
    }

    //BUYING ITEMS
    function buy_something(c, button){
      if(clicks < c){
        button.className = "button button_danger";
        setTimeout(function() {
          let e = document.getElementsByClassName('button-danger')[0];
          e.className = "button button_success";
        }, 1000);
        return false;
      }
      clicks -=c;
      return true;
    }

    function updateClicksPer() {
      let e = document.getElementById('clickPer');
      e.innerHTML = click_increment;
    }

    function update_workers(){
      let e2 = document.getElementById('time_period');
      e2.innerHTML = parseFloat(click_rate / 1000.0).toFixed(2);
      clearInterval(interval_auto);
      interval_auto = setInterval(function() {
        clicks += auto_clicks;
        update_total_clicks();
      }, click_rate);
    }
    //click events

    //SHAKE SANTA
    
    

    //SACK CAPACITY / 1house per sack
    document.getElementById("click").onclick = function(){
      clicks=parseFloat(clicks) + parseFloat(click_increment);
      update_total_clicks();//updates the text
  };
    document.getElementById('buy_click').onclick = function(){
      if(!buy_something(cost, this)) return;
      auto_clicks++;
      sacksBought++;
      cost = Math.floor(cost*1.25); //new cost
      update_total_clicks();
      let e = document.getElementById('clicks_per_second');
      e.innerHTML = auto_clicks;
      let e2 = document.getElementById('buy_click');
      e2.innerHTML = 'Buy for ' + cost;
      let e3 = document.getElementById('sack_cap');
      e3.innerHTML = "lvl " + sacksBought;
    };

   

    //Elves / 10houses per elf
    document.getElementById('elves_number').onclick = function() {
      if(!buy_something(costOfElves, this)) return;
      auto_clicks+=10;
      elvesBought++;
      costOfElves = Math.floor(costOfElves*1.25);//new cost
      update_total_clicks();
      let e = document.getElementById('clicks_per_second');
      e.innerHTML = auto_clicks;
      let e2 = document.getElementById('elves_number');
      e2.innerHTML = 'Buy for ' + costOfElves;
      let e3 = document.getElementById('elves');
      e3.innerHTML = "Number of Elves " + elvesBought;
    };

 //Reindeers / less seconds
    document.getElementById('reindeers_number').onclick = function() {
      if(!buy_something(upgrade_cost, this)) return;
      reindeer_number++;
      click_rate = click_rate * 0.90;
      upgrade_cost = Math.floor(upgrade_cost*1.25);
      update_workers();
      let e2 = document.getElementById('reindeers_number');
      e2.innerHTML = "Buy for " + upgrade_cost;
      let reindeer = document.getElementById("reindeers");
      reindeer.innerHTML = reindeer_number + " Reindeers";
    };
    //Hot coco / more clicks
    document.getElementById('cocoNumber').onclick = function() {
      if(!buy_something(costOfCoco, this)) return;
      cocoBought++;
      click_increment++;
      costOfCoco = Math.floor(costOfCoco*1.25);//new cost
      update_total_clicks();
      updateClicksPer();
      let e2 = document.getElementById('cocoNumber');
      e2.innerHTML = 'Buy for ' + costOfCoco;
      let e3 = document.getElementById('coco');
      e3.innerHTML = cocoBought + ' cups of Coco';
    }

    //Start Autoclickers
    update_workers();

    function set_cookie(cookie_name, value) {
      expiry = new Date();
      expiry.setTime(new Date().getTime() + (10* 60 * 1000));
      var c_value = escape(btoa(JSON.stringify(value))) + "; expires=" + expiry.toUTCString();
      document.cookie = cookie_name + "=" + c_value;
    }

    function get_cookie(cookie_name) {
      var c_value = document.cookie;
      var c_start = c_value.indexOf(' ' + cookie_name + "=");
      if(c_start == -1){
        c_start = c_value.indexOf(cookie_name + "=");
      }
      if (c_start == -1) return false;
      c_start = c_value.indexOf('=', c_start) + 1;
      var c_end = c_value.indexOf(';', c_start);
      if(c_end == -1) {
        c_end = c_value.length;
      }
      c_value = atob(unescape(c_value.substring(c_start, c_end)));
      return JSON.parse(c_value);
    }
