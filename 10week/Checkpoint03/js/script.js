
/*hides all employee profiles until employee is hired*/
$(".employeeProf").hide();
// $(".button").hide();

/*rest of code inside. Will not run until page loaded*/
window.onload = function(){

  var data = {
    totalPaper:0, //total paper accumulated
    totalPaperSec: 0, //amount of paper sold per sec
  };

  // sells paper every second
  setInterval(sellin,1000);

  function sellin() {
    data.totalPaper += data.totalPaperSec;
    updateReport();
  }

  // updates "paper sold" and "paper sold/sec"
  function updateReport() {
    $("#piecesPaper").text(Math.floor(data.totalPaper));
    $("#paperSec").text((data.totalPaperSec).toFixed(3));
  }

  // adds paper to "total paper" when click button
  $("#paperButton").click(function (){
    data.totalPaper ++;
    updateReport();
  })

//sets up store buttons to do three things:
//only hire/level employee if player can afford
//increases cost of level up by 1.3 each time
//sets level

  $(".button").click(function (){
    if ($(this).data( "cost" ) <= data.totalPaper ) {
      /*these two lines make the height of employee headshot responsive*/
      var picWidth = $('.headshot').width();
      $('.headshot').css({'height':(picWidth * 1.25)+'px'});
      data.totalPaper -= parseFloat($(this).data( "cost" ).toPrecision(2));
      data.totalPaperSec += parseFloat($(this).data( "val" ));
      $( this ).children(".price").html( parseInt($( this ).children(".price").html()*1.3));
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.3) );

      //level up code
      if ($( this ).children(".level").text()== "HIRE") {
        $( this ).children(".level").html("level <span class='lev'>1</span>");
      } else {
        console.log($( this ).find(".lev").text());
        $( this ).find(".lev").text(parseInt($( this ).find(".lev").text())+1);
      }
    }
    updateReport();
  })



/*this code makes employee profiles appear when corresponding button is clicked*/


  $("#michael").click(function (){
    $("#michaelProf").show();

    /*these two lines make the height of employee headshot responsive*/
    var picWidth = $('.headshot').width();
    $('.headshot').css({'height':(picWidth * 1.25)+'px'});
  })


  $("#ryan").click(function (){
    $("#ryanProf").show();
  })

  $("#pam").click(function (){
    $("#pamProf").show();
  })

  $("#andy").click(function (){
    $("#andyProf").show();
  })

  $("#stanley").click(function (){
    $("#stanleyProf").show();
  })

  $("#phyllis").click(function (){
    $("#phyllisProf").show();
  })

  $("#jim").click(function (){
    $("#jimProf").show();
  })

  $("#dwight").click(function (){
    $("#dwightProf").show();
  })
} //closing bracket for onload
