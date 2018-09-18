let particleGun = {
  beam:1, 
  //sets the beam mutplier. This should be a constructor instead
  //of a variable so that I could create mutiple guns but
  //I don't know how to do that yet
  cycle:500, 
  //sets auto trigger interval 
  pulseOne: null,
  pulseTwo: null,
  pulseThree: null,
  //to change set intervals, you have to assign it to a variable
  //I was going to have unlocks for different phases but ran out
  //of time
};

let electricityValue = [20,18,14,12,13,17,20,23,24,26,31,32,33,35,37,36,34,33,30,30,36,34,25,21];
//price per MWH for electricty per hour

let storedEnergy = 0;
let placeHolder = "MeV";
//This was a rather poor way to go about converting
//eventually I want to be able to display more meaningful 
//data (with less 0's and more words) to describe the amounts

let ampm = "AM";
let theTime = 8;
let season = 1;
//as of now there are only 5 days in a seasson, a day cycles on a
//pm to am changeover

let theCharge = 0;
let cash = 0;
let totalAtoms=0;
let expLevel = 15;
let weaponLevel = 0;
let weaponPoints = 0;
let experienceCurve = 2.2;
let beamCurve = 1.6;
let cycleCurve = .5;


$(function() {

  setInterval(timeOfDay,500);
  //initilize clock function


  $(".mainPic").click(function(){
    
    fireGun()
    //pew pew
    


  });

  $(".sellCharge").click(function(){
    cash += theCharge*price();
    theCharge = 0;
    $(".theCharge").text(theCharge.toLocaleString('en')
    + " " + placeHolder)


    $(".cash").text("$"+cash.toPrecision(5));
    nextMoneyButton();
    //eventually this will need to understand the difference between
    //cost per MeV/Mwh and the like. Right now it is just a flat cacluation


  });


  $(".upgradeBeam").click(function(){
    
    
    let counter = $(this).data("beam");
    if (counter == "all"){
      counter = weaponPoints;
    }
    weaponPoints-=counter;
    $(".gunpoints").text(weaponPoints);
    //I was going to have a way to spend gun upgrade points on other
    //iteams but ran out of time. The need to have a buy 1 or buy all
    //ended up being unessisarry. Either way, this deducts the value
    //from weapons points and prints the results to the correct field


    for(;counter>0;counter--){
      if (beamCurve<=1){
        $(".upgradeBeam").addClass("invisible");
        $(".leveler").text("max");
        //the beam will eventually max out once the diminising mutiplier
        //hits 1 or less. This is max level. 
        return;

      }
      else{
        beamCurve*=.998
        //the deminising beam curve value, make a smaller number to make
        //the beam max out at a higher level

      }
      particleGun.beam = Math.ceil(particleGun.beam * beamCurve);
      //can only use whole numbers for neutrons, and won't function properly
      //with the mutiplier at a value of 1 unless it rounds up.
      
      $(".beam").text(particleGun.beam.toLocaleString('en'));
      //This will also need a text clean up function when the value
      //gets very high
    }
    if(weaponPoints==0){
      $(".upgradeBeam").prop("disabled",true);
    }
    //old method of disabling buttons, better ways developed after this
    //legacy code that needs updating

  });

  $(".autoFire").click(function(){
    if(!$(".autoFire").hasClass("clicked")&&!$(".autoFire").hasClass("disabled")){
      //if statement was the crude first attempts at enabling and 
      //disabling buttons. It lead the way to other smarter ways using
      //data selectors and classes.
      particleGun.pulseOne = setInterval(autoGun,particleGun.cycle);
      $(this).addClass("clicked");
    }
  });

  $(".upgradeAuto").click(function(){
    if(!$(this).hasClass("disabled")){
      //the smarter way to go about enabling and disabling buttons
      //in the future I will have a class of unlocks that corispond to
      //certain classes and that function will look to see when the 
      //next unlock will occur
      $(this).addClass("clicked");
      //clicked class is the way I make sure an upgrade goes away
      clearInterval(particleGun.pulseOne);
      //we have to stop the interval if we want to have an interval
      //with a faster rate of fire. This is also why we need to 
      //assign it to a variable, it can't be halted otherwise
      particleGun.cycle*=cycleCurve;
      cycleCurve*=.5;
      //beam gets very powerful very quickly and has forced limited upgrades
      //because of the limits we have to timer speed. 
      particleGun.pulseOne = setInterval(autoGun,particleGun.cycle);
      //resume interval with newer, faster rate
    }


  });


});

function autoGun(){
  fireGun();
  $(".autoFire").remove();
  //pew pew, but automatic like.  Also, get ride of the button but the
  //old, dumb way. 
}


function fireGun(){



  theCharge += (214 * particleGun.beam);
  $(".theCharge").text(theCharge.toLocaleString('en')
  + " " + placeHolder);

  //eventually replace with fancy text manipulator 


  totalAtoms+=particleGun.beam;
  $(".smash").text(totalAtoms.toLocaleString('en'));
  //eventually replace with fancy text manipulator 


  if(totalAtoms>=10){
    $(".upgrades").css("display","inline");
    //old way of enabling buttons. Worked, but now I regret everything
    if($(".upgradeBeam").hasClass("invisible")){
      $(".leveler").text("Max Level")
      //hack to know the beam curve is now 1 or less than one, but
      //made it dependant on the buttons going offline incase I do something
      //else with beam curve

    }else{
      $(".leveler").text(expLevel.toLocaleString('en'))
      //otherwise just show how much XP till next level

    }
  }

  if(totalAtoms>=expLevel){
    expLevel = Math.round(expLevel * experienceCurve);
    experienceCurve*=1.51;
    //The upgrades give some serious problems to the XP curve, modded
    //to make sure the numbers don't run away to infinity. Along
    //with beam decay and experience expansion, it is hard capped a 
    //a relatively good income generation max of a hundred million per hour

    weaponLevel++;
    weaponPoints+=weaponLevel;
    if(weaponLevel>0){
      $(".gunpoint").css("display","inline");
      $(".gunpoints").text(weaponPoints);
      $(".beamLevelContainer").css("display","flex");
      $(".leveler").text(expLevel.toLocaleString('en'))
      //old way of enabling things, kill me

    }
  }

  if (weaponPoints>0){
    $(".upgradeBeam").prop("disabled",false);
  }

  if(totalAtoms>=500){
    $(".middle").css("display","inline");
  }

  if(totalAtoms>=5000){
    $(".autoFire").removeClass("disabled");
  }
  //old way of enabling things along with the new way...I like the new way
  nextAtomButton();
  //this is the new way of seeing what buttons to show or disable
  //specifically for atom achievements. In the future I need to think
  //about how to do button unlocks for achievement in mutiple areas

}


function nextAtomButton(){

counter = $("[data-enable-atoms]").length;
buttonEnabler = $("[data-enable-atoms]");
//grab me all the atom threshold smashing upgrade unlocks
for(;counter>-1;counter--){
  let enableAtoms = Number($(buttonEnabler[counter]).data("enable-atoms"));
  let tempData = Number($(buttonEnabler[counter]).data("cost-atoms"));
  let currentButton = $(buttonEnabler[counter]);
  if (totalAtoms>=enableAtoms){
    $(currentButton).children().first().text(tempData);
    $(currentButton).removeClass("invisible")
    //make it visible when it reaches enable threshold
    }
  if(totalAtoms>=tempData){
    $(currentButton).removeClass("disabled")
    //make it clickable when reaches cost threshold, only modify
    //data values because it also modifies the span values for easy
    //retrospective game balancing (that is what the children call is doing)
  }
  
}
}


function timeOfDay(){
  theTime++;
  if(theTime>12){
    changeampm();
    theTime-=12;
  }

  //this is how I started the project, with the time of day counter

  $(".theactualTime").text(theTime+":00"+ampm);
  $(".seeson").text(theSeason());
  //I was going to have seasonal changes in price, this is not functing
  $(".thePrice").text("$"+price().toPrecision(5) + "per " + placeHolder);
  //eventually replace with fancy text manipulator 

}


function price(){
  let divider=0
  if (ampm == "PM"){
    divider = electricityValue[theTime+11];
  }else{
    divider = electricityValue[theTime-1];
  }
  //find place in array for morning or evening

  if (placeHolder=="MeV"){
    // return divider;
    return divider*4.4505e-23;
    //eventually replace with fancy text manipulator 
  }
  
}

function changeampm(){
  if(ampm=="AM"){
    ampm="PM"
  }else{
    ampm="AM"
    season++;
    //when night becomes day, add another day to the total number of
    //days in the season. There are only 20 days in a cycle
  }
}

function theSeason(){
if (season<5){
  return "Spring";
}
else if(season<10){
  return "Summer";
}
else if(season<15){
  return "Fall";
}
else if (season<20){
  return "Winter";
}
else {
  season=1;
  //season has gone over 20 so reset the counter
  return "Spring";
}  

}

function nextMoneyButton(){
//not yet impliented money unlocks
}
