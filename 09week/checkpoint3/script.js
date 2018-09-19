let gallonsRemoved = 0;
let energy = 0;
  

  
$( document ).ready(function() {

  // Timer
setInterval(well,1000);



  // Counter Section/Blank Number Box
  function well() {
    data.gallonsRemoved += data.energy;
    data.gallonsRemoved += data.energy;
    $(".water").css({ 'transform': 'rotate(' + data.gallonsRemoved + 'deg)'});
    updateReport();
  }
  
  function updateReport() {
    $("#currentTotal").text(energy);
    $("#gallons").text(gallonsRemoved);
  }
  
  
  $(".rippleButton").click(function (){
    energy ++;
    updateReport();
  })
  
  // Clicker
  $(".button").click(function (){ 
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < energy ) {
      energy -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      gallonsRemoved += parseFloat($(this).data( "val" ));
      $( this ).children("span").text(parseInt($( this ).children("span").html()*1.15)); 
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
    }
    updateReport();
  })

  //   Automatic Pump
  $(".pump").click(function (){
      if (gallonsRemoved>50){

      setInterval(automatic,1000);
      $(this).remove();
      }
  });


  // Number of Gallons Removed From Automatic Pump
  function automatic(){
      gallonsRemoved+=5;
      updateReport();
  }

});