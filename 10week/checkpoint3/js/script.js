//After page loads, this alert tells the user how to start the game.
$(document).one("click",function() {
  alert ("Click the orange discus fish to begin.");
});

// The declared "data" variable represents the combined revelations, current, and rotations per second to track information.
var data = {
  totalFlex:25,
  totalCurrent:0,
  totalSwimSpeed: 0
};

//The function "swim" is called every second (1000 ms).
setInterval(swim,1000);

//The function "swim" calls on the variable "data", telling the fish to swim (flex). It says that (totalFlex = totalFlex + totalSwimSpeed) AND (totalCurrent = totalCurrent + totalSwimSpeed). Jquery calls on the id "fishie" and adds css, telling it to transform, and then update report.
function swim() {
  data.totalFlex += data.totalSwimSpeed;
  data.totalCurrent += data.totalSwimSpeed;
  $("#fishie").css({ 'transform': 'skew(' + data.totalFlex + 'deg)'});
  $("#fishie").css({ 'transform': 'rotateX(' + data.totalFlex + 'deg)'});
  updateReport();
};

//Every time the fishie is clicked, it adds one "totalFlex" and one "totalCurrent" to the updated report.
$(function() {
  $("#fishie").click(function() {
  data.totalFlex++;
  data.totalCurrent++;
  updateReport();
})
});

//The function "updateReport" calls on the id "currentTotal" and tells it to update every time the fish is clicked. It also calls on the id "swimSpeed", updates how much flexing occurred, and sets how many places past the decimal it will report.
function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#swimSpeed").text((data.totalSwimSpeed/5).toFixed(3));
};

//Created a variable to reach into the specific button that is clicked. If the button value is greater than the totalCurrent, it is disabled for clicks. When any of the buttons are able to be clicked, it subtracts the "cost" from your "currentTotal", then updates & increases the previous button cost by 1.15.
$(function() {
  $(".button").click(function() {
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < data.totalCurrent ) {
      data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      data.totalSwimSpeed += parseFloat($(this).data( "val" ));
      $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15));
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) );
    }
    updateReport();
  })
});
