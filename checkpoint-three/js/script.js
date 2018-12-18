'use strict';


  let clicks = 0; //increment this by one every click
  let auto_clicks = 0; //auto click once per second
  let cost = 1; //the cost of this should increase exponentially
  let costOfElves = 1000; //Cost of Elves
  let reindeer_number = 0; //the level of the reindeer upgrade
  let sacksBought = 0; //number of sacks bought
  let elvesBought = 0; //number of elves bought
  let click_rate = 1000; // ms between each autoclick
  let interval_auto; //storing our interval here so we can update it
  let click_increment = 1; //how many clicks per click
  //FUNCTIONS 
  function update_total_clicks(){ //updates the number of clicks
    let e = document.getElementById('total_clicks');
    e.innerHTML = clicks;
  }

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

  //Sack
  document.getElementById("click").onclick = function(){
    clicks=parseFloat(clicks) + parseFloat(click_increment);
    update_total_clicks();//updates the text
  };
  document.getElementById('buy_click').onclick = function(){
    if(!buy_something(cost, this)) return;
    auto_clicks++;
    sacksBought++;
    cost = Math.pow(2, sacksBought); //new cost
    update_total_clicks();
    let e = document.getElementById('clicks_per_second');
    e.innerHTML = auto_clicks;
    let e2 = document.getElementById('buy_click');
    e2.innerHTML = 'Buy for ' + cost;
    let e3 = document.getElementById('sack_cap');
    e3.innerHTML = "lvl " + auto_clicks;
  };

  //Reindeers
  document.getElementById('reindeers_number').onclick = function() {
    let upgrade_cost = (Math.pow(3, reindeer_number)) * 100;
    if(!buy_something(upgrade_cost, this)) return;
    reindeer_number++;
    click_rate = click_rate * 0.90;
    update_workers();
    let e2 = document.getElementById('reindeers_number');
    e2.innerHTML = "Buy for " + ((Math.pow(3, reindeer_number)) *100);
    let reindeer = document.getElementById("reindeers");
    reindeer.innerHTML = "Lvl " + reindeer_number;
  };

  //Elves 
  document.getElementById('elves_number').onclick = function() {
    if(!buy_something(costOfElves, this)) return;
    auto_clicks+=10;
    elvesBought++;
    costOfElves = (Math.pow(3, elvesBought)*1000);//new cost
    update_total_clicks();
    let e = document.getElementById('clicks_per_second');
    e.innerHTML = auto_clicks;
    let e2 = document.getElementById('elves_number');
    e2.innerHTML = 'Buy for ' + costOfElves;
    let e3 = document.getElementById('elves');
    e3.innerHTML = "Number of Elves" + elvesBought;
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

