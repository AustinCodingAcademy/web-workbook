


'use strict'

$(document).ready(function(){




var toycount = 0;
var multiplier = 1;
var autoClick = 0;
var elves = 0;
var toyspersecond = 0;


$("#directions").click(function(){
    alert("Help Eddie the Elf make toys to load Santa's Sled. Eddie didn't have a good season last year, his toy production was low, and his job at the North Pole is in jeopardy.  Each click on Eddie the elf makes 1 toy.  Once you have made enough toys, you can buy items that will help your toy production go faster than you can click! There are children with lots of toys on their list,so HURRY!... And don't forget the MORE toys you help Eddie make ...will put him back on the top of Santas STAR ELF LIST!");

});

//elf clicker that controls toycount//
$("#elf").click(function(){
    toycount++;
});
// adds elves, multipliers and autoclick, and subtracts cost from toys: alert if not enough
$("#buyElves").click(function(){
    if (toycount >= ((elves+1) * 15)) {
        toycount = toycount - ((elves+1) * 15);
        elves= elves + 1;}
      else{
            alert("You haven't made enough toys!");
          }

    });


    $("#buyAutoClick").click(function(){
    if (toycount >= ((autoClick+1) * 12)) {
        toycount = toycount - ((autoClick+1) * 12);
        autoClick = autoClick + 1;
      }
        else{
          alert("You haven't made enough toys!");
        }

    });



    $("#buyMultiplier").click(function(){
      if (toycount >= ((multiplier) * 200)) {
          toycount = toycount - ((multiplier) * 200);
          multiplier = multiplier +1;
        }
        else{
          alert("You haven't made enough toys!");
        }
        $('#buyMultiplier_clicks').html(multiplier);
    });


// calls the update of items that have been bought?/
    function update() {
            document.getElementById('text').value = toycount;
            document.title = toycount + " Toys";
            document.getElementById('amountElves').innerHTML = "You Own " + elves + " Elves";
            document.getElementById('costElves').innerHTML = ((elves+1) * 15) + " Toys";
            document.getElementById('amountAutoClick').innerHTML = "You Own " + autoClick + " Auto Clickers";
            document.getElementById('costAutoClick').innerHTML = ((autoClick+1) * 12) + " Toys";
            document.getElementById('amountMultiplier').innerHTML = "You Own " + multiplier + " Multipliers";
            document.getElementById('costMultiplier').innerHTML = ((multiplier) * 200) + " Toys";
            document.getElementById('toyspersecond').innerHTML = "You are gaining " + (((autoClick)+(elves))*multiplier) + " Toys per second";
          }

          //every second toy count is updated to show itema bought//
          function timer() {
            toycount = toycount + (autoClick + elves)* multiplier;
            // toycount = toycount + elves*multiplier
            update();

          }
          setInterval(timer, 1000);
    }); //final closing for jquery //
