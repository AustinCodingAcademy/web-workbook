$(document).ready(function(){
    let sleepy1 = 10; 
    let sleepy2 = 100;
    let sleepy3 = 1000;
    let sleepy4 = 10000;
    
    var totalCount = 0
    var rpm = 0
    
    $('#hypnowheel').click(function(){
        
        totalCount ++
        updateBoxes()
    })

    $('#sleepy1').click(function(){
        console.log("total amount of hypno points before purchase: " + totalCount)
        if(!(totalCount < sleepy1)){
            totalCount -= sleepy1;
            console.log("total amount of hypno points after purchase: " + totalCount)
            console.log("total amount of RPMS before purchase: " + rpm)
            rpm += .1
            console.log("total amount of RPMS after purchase: " + rpm)

        }
    })


    function updateBoxes(){
        console.log(totalCount)

        $('#hypnoPoints').text(totalCount);
    }
});

// var data = {
//     totalRevs:360, 
//     totalCurrent:0, 
//     totalRPS: 0
//   };
  
//   setInterval(goGo,1000);
  
//   function goGo() {
//     data.totalRevs += data.totalRPS;
//     data.totalCurrent += data.totalRPS;
//     $("#wheel").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
//     updateReport();
//   }
  
//   function updateReport() {
//     $("#currentTotal").text(Math.floor(data.totalCurrent));
//     $("#rps").text((data.totalRPS/70.4).toFixed(3));
//   }
  
  
//   $("#wheel").click(function (){
//     data.totalRevs ++;
//     data.totalCurrent ++;
//     updateReport();
//   })
  
//   $(".button").click(function (){ 
//     var addVal = $(this).data( "cost" );
//     if ($(this).data( "cost" ) < data.totalCurrent ) {
//       data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
//       data.totalRPS += parseFloat($(this).data( "val" ));
//       $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
//       $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
//     }
//     updateReport();
//   })