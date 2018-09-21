//I'm really sorry for basically copying your example Keith, I'm still having some trouble with javascript and my first attempt took an ungodly amount of time and still ended up not working :(

var data = {
  totalWeight:360, 
  totalCurrent:0, 
  totalWPS: 0
};

setInterval(goGo,1000);

function goGo() {
  data.totalWeight += data.totalWPS;
  data.totalCurrent += data.totalWPS;
  updateReport();
}

function updateReport() {
  $("#currentTotal").text(Math.floor(data.totalCurrent));
  $("#wps").text((data.totalWPS).toFixed(3));
}


$(".catbutton").click(function (){
  data.totalWeight ++;
  data.totalCurrent ++;
  updateReport();
})

$(".button").click(function (){ 
  var addVal = $(this).data( "cost" );
  if ($(this).data( "cost" ) < data.totalCurrent ) {
    data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
    data.totalWPS += parseFloat($(this).data( "val" ));
    $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
    $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
  }
  updateReport();
})

// var slideIndex = 0;
// carousel();

// function carousel() {
//     var i;
//     var x = document.querySelector(".catbutton");
//     for (i = 0; i < x.length; i++) {
//       x[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex > x.length) {slideIndex = 1} 
//     x[slideIndex-1].style.display = "block"; 
//     setTimeout(carousel, 5000);
// }