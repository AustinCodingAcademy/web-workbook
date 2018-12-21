'use strict';

$(document).ready(function() {


    var totalmoney = 0;   // money variable
    $("#totalmoney").text(totalmoney);  // starts displaying money with 0

    var totalcats = 0;                  // cats variable
    $("#totalcats").text(totalcats);    // starts displaying cats with 0


 $(".yarn").click(function () {    
    console.log("CLICK");
    totalmoney++;
    if(totalcats > 0) {
      totalmoney += totalcats; 
    }
    $(this).html(totalmoney);       // clicking on yarn gives you $1 per click
    $("#totalmoney").text(totalmoney);    // adds money to totalmoney div
 });

    

 $(".cat").click(function () {

    if (totalcats == 10) {                   // if you have 10 cats
        event.stopPropagation();
        console.log("You don't have enough room")    // you don't have enough room for more cats
    } else if (totalmoney >= 10) {             // if you have $10
        $(this).html(totalcats++);
        $("#totalcats").text(totalcats);
        console.log("BUY CAT");               // you can buy a cat
        totalmoney = totalmoney-10;           // pay for cat
        $("#totalmoney").text(totalmoney);
     } else {
        event.stopPropagation();               // otherwise you can't
        console.log("You don't have enough money")
     }

     

     });  

});

/* $(".button").click(function (){ 
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < data.totalCurrent ) {
      data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      data.totalRPS += parseFloat($(this).data( "val" ));
      $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
    }
    updateReport();
  })

  */
 