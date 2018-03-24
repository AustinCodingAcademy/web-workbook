// var data = {
//     totalRevs:360,
//     totalCurrent:0,
//     totalRPS: 0
// };
//
// setInterval(goGo,1000);
//
// function goGo() {
//     data.totalRevs += data.totalRPS;
//     data.totalCurrent += data.totalRPS;
//     $("#wheel").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
//     updateReport();
// }
//
// function updateReport() {
//     $("#currentTotal").text(Math.floor(data.totalCurrent));
//     $("#rps").text((data.totalRPS/70.4).toFixed(3));
// }
//
//
// $("#wheel").click(function (){
//     data.totalRevs ++;
//     data.totalCurrent ++;
//     updateReport();
// })
//
// $(".button").click(function (){
//     var addVal = $(this).data( "cost" );
//     if ($(this).data( "cost" ) < data.totalCurrent ) {
//         data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
//         data.totalRPS += parseFloat($(this).data( "val" ));
//         $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
//         $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
//     }
//     updateReport();
// })
// 'use strict';
//
// $(document).ready(function() {
//
//   let data;
//   data = {
//     totalMoney: 0,
//     investmentReturn: 0
//   };
//
//     setInterval(invest(), 10);
//
//   $('#burger').click(function () {
//     data.totalMoney++;
//     updateReport();
//   })
//
//   function updateReport() {
//     $('#cash').text(Math.floor(data.totalMoney));
//     $('#irr').text(data.investmentReturn);
//   }
//
//   $('.plan').click(function () {
//
//     // if ($(this).data('cost') < data.totalMoney) {
//     //   data.totalMoney -= parseInt($(this).data('cost'));
//     //   data.investmentReturn += parseInt($(this).data('val'));
//     // }
//
//     var addVal = $(this).data( "cost" );
//     if ($(this).data( "cost" ) < data.totalMoney ) {
//       data.totalMoney -= parseFloat($(this).data("cost").toPrecision(2));
//       data.investmentReturn += parseFloat($(this).data("val"));
//       $(this).children("span").html(parseInt($(this).children("span").html() * 1));
//       $(this).data("cost", parseInt($(this).data("cost") * 1));
//     }
//     updateReport();
//   })
//
//   function invest() {
//     data.totalMoney += data.investmentReturn;
//     updateReport();
//   }
//
//
//
// });


'use strict';
$(document).ready(function() {

  var data = {
    money: 0,
    investment: 0
  };

  setInterval(invest(),10);

  function invest() {
    data.money += data.investment;
    updateReport();
  }





  function updateReport() {
    $("#cash").text(Math.floor(data.money));
    $("#irr").text(Math.floor(data.investment));

  }


  $("#burger").click(function (){

    data.money ++;
    updateReport();
  })

  $(".plan").click(function (){
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < data.money ) {
      data.money -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      data.investment += parseFloat($(this).data( "val" ));
      $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
    }
    updateReport();

  });

  updateReport();

});