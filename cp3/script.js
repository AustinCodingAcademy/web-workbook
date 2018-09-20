
var mileStone = 0;
var data = {
    totalFlaps:0, 
    totalCurrent:0, 
    totalDIST: 0
  };
//global variables that are called upon in the code below

$( document ).ready(function() {

  setInterval(goGo,1000);
  
  function goGo() {
    data.totalFlaps += data.totalDIST;
    data.totalCurrent += (data.totalDIST/5);
    updateReport();
  }
//function that acts like a loop to track the values in the data variable

  function updateReport() {
    $("#currentTotal").text(Math.floor(data.totalCurrent));
    $("#dist").text((data.totalDIST).toFixed(1));
    if (data.totalDIST >= 1 && mileStone == 0){
        alert("You went 5 miles!");
        mileStone ++;
    } else if (data.totalDIST >= 146 && mileStone == 1) {
        alert("Howdy, You made it to Houston!");
        mileStone ++;
    } else if (data.totalDIST >= 1513 && mileStone == 2){
        alert("Yo Howyoudoin, You made it to New York!");
        mileStone++;
    } else if (data.totalDIST >= 5101 && mileStone == 3){
        alert("Bonjour, You made it to Paris!");
        mileStone++;
    } else if (data.totalDIST >= 8364 && mileStone == 4){
        alert("Namaste, You made it to New Dehli!");
        mileStone++;
    } else if (data.totalDIST >= 14851 && mileStone == 5){
        alert("G'day Mate, You made it to Sydney!");
        mileStone++;
    } else if (data.totalDIST >= 19931 && mileStone == 6){
        alert("Aloha, You made it to Honolulu!");
        mileStone++;
    } else if (data.totalDIST >= 24901 && mileStone == 7){
        alert("You made it around the World!!");
        mileStone++;
  }
}
//Function that targets and stores the currentTotal and rounds the number to the lowest whole number. Then //
// it targets the id dist and displays the text that's equal to the value stored in totalDIST. Then the function //
// goes through several conditional statements that compare the value in TotalDIST with the numerical value and if //
// greater than or equal to that value it displays an alert which states the mileStone or acheivement that you reached.//

  $("#ladyBug").click(function (){
    data.totalFlaps ++;
    data.totalCurrent ++;
    updateReport();
    $(this).effect( "shake" );
  })
//Targets the ladyBug image and when clicked it adds one to totalFlaps variable and totalCurrent variable then it //
// runs the updateReport funciton. It also targets the image and uses jQuery UI to animate the image by shaking it.
  
  $(".button").click(function (){ 
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < data.totalCurrent ) {
      data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      data.totalDIST += parseFloat($(this).data( "val" ));
      $( this ).children("span").html( parseInt($( this ).children("span").html()*1.10)); 
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.10) ); 
    }
    updateReport();
  })
//Targets the buttons calculates the increase in cost on each click. Also specifies if it is possible to click //
// or use a button by comparing the cost to the totalCurrent variable.//
});