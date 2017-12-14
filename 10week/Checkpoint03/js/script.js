
/*hides all employee profiles until employee is hired*/
$(".employeeProf").hide();

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
    $("#michaelProf").slideDown();
    /*next four lines make height of employee profile and headshot responsive with the width*/
    var paperWidth = $('.employeeProf').width();
    $(".employeeProf").css({'height':(paperWidth * 1.25) + 'px'})
    var picWidth = $('.headshot').width();
    $('.headshot').css({'height':(picWidth * 1.25)+'px'});
  })

// make ryan appear
  $("#ryan").click(function (){
    $("#ryanProf").slideDown();
    var paperWidth = $('.employeeProf').width();
    $(".employeeProf").css({'height':(paperWidth * 1.25) + 'px'})
    var picWidth = $('.headshot').width();
    $('.headshot').css({'height':(picWidth * 1.25)+'px'});
  })

// make pam appear
  $("#pam").click(function (){
    $("#pamProf").slideDown();
    var paperWidth = $('.employeeProf').width();
    $(".employeeProf").css({'height':(paperWidth * 1.25) + 'px'})
    var picWidth = $('.headshot').width();
    $('.headshot').css({'height':(picWidth * 1.25)+'px'});
  })

// make andy appear
  $("#andy").click(function (){
    $("#andyProf").slideDown();
    var paperWidth = $('.employeeProf').width();
    $(".employeeProf").css({'height':(paperWidth * 1.25) + 'px'})
    var picWidth = $('.headshot').width();
    $('.headshot').css({'height':(picWidth * 1.25)+'px'});
  })

// make stanley appear
  $("#stanley").click(function (){
    $("#stanleyProf").slideDown();
    var paperWidth = $('.employeeProf').width();
    $(".employeeProf").css({'height':(paperWidth * 1.25) + 'px'})
    var picWidth = $('.headshot').width();
    $('.headshot').css({'height':(picWidth * 1.25)+'px'});
  })


//make phyllis appear
  $("#phyllis").click(function (){
    $("#phyllisProf").slideDown();
    var paperWidth = $('.employeeProf').width();
    $(".employeeProf").css({'height':(paperWidth * 1.25) + 'px'})
    var picWidth = $('.headshot').width();
    $('.headshot').css({'height':(picWidth * 1.25)+'px'});
  })

//make jim appear
  $("#jim").click(function (){
    $("#jimProf").slideDown();
    var paperWidth = $('.employeeProf').width();
    $(".employeeProf").css({'height':(paperWidth * 1.25) + 'px'})
    var picWidth = $('.headshot').width();
    $('.headshot').css({'height':(picWidth * 1.25)+'px'});
  })

//make dwight appear
  $("#dwight").click(function (){
    $("#dwightProf").slideDown();
    var paperWidth = $('.employeeProf').width();
    $(".employeeProf").css({'height':(paperWidth * 1.25) + 'px'})
    var picWidth = $('.headshot').width();
    $('.headshot').css({'height':(picWidth * 1.25)+'px'});
  })
} //closing bracket for onload
