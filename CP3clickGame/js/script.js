$( document ).ready(function() {

let data = {
    totalCurrent: 0,
    emailsPS: 0,
    bigTotal: 0
};

setInterval(onGoing,1000);

function onGoing(){
    data.totalCurrent += data.emailsPS;
    data.bigTotal += data.emailsPS;
    updateInfo();
    epsLabelF();
    smallerNumber();
    achieve();
}

function updateInfo(){
    $('.currentTotal').text(Math.floor(data.totalCurrent));
    $('.eps').text(data.emailsPS);
    $('.totalTotal').text(Math.floor(data.bigTotal));
}

$('.atSym').click(function(){
    data.totalCurrent++;
    data.bigTotal++;
    $('.atSym').effect('bounce', { distance: 15 , times: 1 }, 100 );
    updateInfo();
})

$('.button').click(function(){
    if ($(this).data('cost') <= data.totalCurrent){
        data.totalCurrent -= parseFloat($(this).data('cost'));
        data.emailsPS += parseFloat($(this).data('val'));
        $(this).children('span').html(parseInt($(this).children('span').html()*1.15));
        $(this).data('cost', parseInt($(this).data('cost')*1.15));
     }
     updateInfo();
})

function smallerNumber(){
    if (data.bigTotal > 9999999){
        $('.totalTotal').addClass('smallerFont');
    } 
}

function epsLabelF(){
if (data.emailsPS == 1){
    $('.epsLabel').text(" email per second");
}else{
    $('.epsLabel').text(" emails per second");
}}

function achieve(){
    if(data.bigTotal >= 1000000000){
        $('.ach4').addClass('collected');
    }else if(data.bigTotal >= 100000000){
        $('.ach3').addClass('collected');
    }else if(data.bigTotal >= 1000000){
        $('.ach2').addClass('collected');
    }else if(data.bigTotal >= 100000){
        $('.ach1').addClass('collected');
    }
}


});//end ready function


