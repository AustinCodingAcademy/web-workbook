'use strict';

$(document).ready(function() {
      var last = "O";
    $('.row div').click(function() {
          var currentValue = $(this).text();
          console.log("currentValue is equal to " + currentValue)
          console.log("currentValue length is " + currentValue.length)
          if (currentValue.length == 0) {
            if (last == "O") {
              $(this).text("X");
              last = "X";
              console.log("last move...", last);
            } else {
              $(this).text("O");
              last = "O";
              console.log("last move...", last);
            }
          }
          function myFunction() {
            setTimeout(function(){ alert(last + " wins!"); }, 1000);
          }
          //** delay outcome message**//
            //**variables**//
            var Box0 = $("[data-cell*='0']").text();
            console.log("Data-cell 0 is " + Box0);
            var Box1 = $("[data-cell*='1']").text();
            console.log("Data-cell 1 is " + Box1);
            var Box2 = $("[data-cell*='2']").text();
            console.log("Data-cell 2 is " + Box2);
            var Box3 = $("[data-cell*='3']").text();
            console.log("Data-cell 3 is " + Box3);
            var Box4 = $("[data-cell*='4']").text();
            console.log("Data-cell 4 is " + Box4);
            var Box5 = $("[data-cell*='5']").text();
            console.log("Data-cell 5 is " + Box5);
            var Box6 = $("[data-cell*='6']").text();
            console.log("Data-cell 6 is " + Box6);
            var Box7 = $("[data-cell*='7']").text();
            console.log("Data-cell 7 is " + Box7);
            var Box8 = $("[data-cell*='8']").text();
            console.log("Data-cell 8 is " + Box8);

            if ((Box0 === Box1) && (Box1 === Box2) && (Box0 === "O" || Box0 === "X")) {
              myFunction();
              //$("[data-cell]").text("");
            } else if ((Box3 === Box4) && (Box4 === Box5) && (Box3 === "O" || Box3 === "X")) {
              myFunction();
              //$("[data-cell]").text("");
            } else if ((Box6 === Box7) && (Box7 === Box8) && (Box6 === "O" || Box6 === "X")) {
              myFunction();
              //$("[data-cell]").text("");
            } else if ((Box0 === Box3) && (Box3 === Box6) && (Box0 === "O" || Box0 === "X")) {
              myFunction();
              //$("[data-cell]").text("");
            } else if ((Box1 === Box4) && (Box4 === Box7) && (Box1 === "O" || Box1 === "X")) {
              myFunction();
              //$("[data-cell]").text("");
            } else if ((Box2 === Box5) && (Box5 === Box8) && (Box2 === "O" || Box2 === "X")) {
              myFunction();
              //$("[data-cell]").text("");
            } else if ((Box0 === Box4) && (Box4 === Box8) && (Box0 === "O" || Box0 === "X")) {
              myFunction();
              //$("[data-cell]").text("");
            } else if ((Box2 === Box4) && (Box4 === Box6) && (Box2 === "O" || Box2 === "X")) {
              myFunction();
              //$("[data-cell]").text("");
              console.log("win");
              //**variables and check values**//
            }
            $('button').click(function(){
              $("[data-cell]").text("");
              //** replaced lines 46 and so on**//
            });
          });


      });
