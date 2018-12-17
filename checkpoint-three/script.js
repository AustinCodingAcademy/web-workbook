$(document).ready(function() {



$("img").click(function(){
    $(this).css('cursor', 'pointer');

})


let num = 0
$("#moon").click(function(){
    $("#counter").html(num++);
    if(num >= 30 ){
        num += 2;
        upgradeLevel.innerHTML = "Level 1!";
    }
    //upgrade to 10x
    if(num >= 500) {
        num += 10;
        upgradeLevel.innerHTML = "Level 2!";
    }
     //upgrade to 30x
     if(num >= 1000) {
        num += 30;
        upgradeLevel.innerHTML = "Level 3!";
    }

    //upgrade to 1000x
    if(num >= 100000) {
        num += 1000;
        upgradeLevel.innerHTML = "Super Level!";
    }

})

});

