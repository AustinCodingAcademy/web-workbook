$( document ).ready(function() {

let data = {
    totalCurrent: 0,
    emailsPS: 0,
};

setInterval(onGoing,1000);

function onGoing(){
    data.totalCurrent += data.emailsPS;
    updateInfo();
}

function updateInfo(){
    $('.currentTotal').text(Math.floor(data.totalCurrent));
    $('.eps').text((data.emailsPS));
}

// $(".atSym").mouseover(function(){
//     $(this).css('transform' , 'scale(1.1,1.1)');
// })

// $(".atSym").mouseleave(function(){
//     $(this).css('transform' , 'scale(1,1)');
// })

$(".atSym").click(function(){
    data.totalCurrent++;
    // animation not working, tweaking asap
    // $(this).css('transform' , 'scale(1.1,1.1)');
    // setTimeout(function(){
    //     $(this).css('transform' , 'scale(1,1)');
    // },500);

    //expand jquery ui??

    // $('.atSym').addClass('bigAtSym').delay(200).queue(function(){
    //     $(this).removeClass('bigAtSym');
    //     $(this).dequeue();
    //});

    updateInfo();
})

$('.button').click(function(){
    if ($(this).data('cost') <= data.totalCurrent){
        data.totalCurrent -= parseFloat($(this).data('cost'));
        data.emailsPS += parseFloat($(this).data('val'));
        $(this).children('span').html(parseInt($(this).children('span').html()*1.2));
        $(this).data('cost', parseInt($(this).data('cost')*1.2));
     }
     updateInfo();
})

});

// ADD TO GAME!!
//add counter
//add total emails out
//when total hits a certian number, make clicks worth 2
//earn badges once hit certain milestone