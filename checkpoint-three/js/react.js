var data = {
    totalRevs:360, 
    totalCurrent:0, 
    totalRPS: 0
  };
  
  setInterval(goGo,1000);
  
  function goGo() {
    data.totalRevs += data.totalRPS;
    data.totalCurrent += data.totalRPS;
    $("#cabeza").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
    updateReport();
  }
  //calc
  function updateReport() {
    $("#currentTotal").text(Math.floor(data.totalCurrent));
    $("#rps").text((data.totalRPS/70.4).toFixed(3));
  }
  //unicorn turn count
  $("#cabeza").click(function (){
    data.totalRevs ++;
    data.totalCurrent ++;
    updateReport();
  })
  
  $(".button").click(function (){ 
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < data.totalCurrent ) {
      data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      data.totalRPS += parseFloat($(this).data( "val" ));
      $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
    }
    updateReport();
  })
//to change image from one on hover to the one clicked on.
  function changeimg() {
      var cabeza = document.getElementById("cabeza");
      if(cabeza.src == "unicornse.jpg"){
          cabeza.src = "unicorns.jpg"
      }
      else{
        cabeza.src = "unicornse.jpg";
      }
    }

