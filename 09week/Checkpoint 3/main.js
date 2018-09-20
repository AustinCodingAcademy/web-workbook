var data = {
    totalEggs:360, 
    totalCurrent:0, 
    totalEPS: 0
  };
  
  setInterval(goGo,100);
  
  function goGo() {
    data.totalEggs += data.totalEPS;
    data.totalCurrent += data.totalEPS;
    $(".show").css({ 'transform': 'rotate(' + data.totalEggs + 'deg)'});
    updateReport();
  }
  
  function updateReport() {
    $("#currentTotal").text(Math.floor(data.totalCurrent));
    $("#eps").text((data.totalEPS/70.4).toFixed(3));
  }
  
  
  $("#chicken").click(function (){
    data.totalEggs ++;
    data.totalCurrent ++;
    updateReport();
  })
  
  $(".button").click(function (){ 
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < data.totalCurrent ) {
      data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      data.totalEPS += parseFloat($(this).data( "val" ));
      $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
    }

   })
  $('#chicken').click(function(){
    $('.show').fadeIn('slow', function(){
      });

      // $('#chicken').click(function(){
      //   $('.show').css('transform', 'translate(100px, 0)')
      
    });


  updateReport();
