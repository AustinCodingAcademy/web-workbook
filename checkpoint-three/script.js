$(document).ready(function() {

//change cursor on img click

$("img").click(function(){
    $(this).css('cursor', 'pointer');

})

let num = 0
$("#moon").click(function(){
    $("#counter").html(num++);
    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Sweet! Level 1!";
    }
    //upgrades to 10x
    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Yay! Level 2!";
        alert("Nice!");
    }
     //upgrades to 30x
     if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Woo! Level 3!";
    }

    //upgrades to 1000x
    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "Super Level!!!";
        alert("WOW!! That's Amazing!")
    }

})

});

