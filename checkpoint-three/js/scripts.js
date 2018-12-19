// 'use strict';

$(document).ready(function () {

    let x = 0;

    $('#symbol').click(function () {
        x += 1;
        $('#count').text(x);
        console.log(x);
    });

    $('#btn_1').click(function () {
        x += 1;
        console.log(x);
    });

    $('#btn_2').click(function () {
        x += 1;
        console.log(x);
    });

    $('#btn_3').click(function () {
        x += 1;
        console.log(x);
    });

    $('#btn_4').click(function () {
        x += 1;
        console.log(x);
    });

    $('#reset').click(function () {
        let answer = confirm("Are you sure you want to do this? You will loose all of your progress.");
        if (answer){
            $('#count').text('0');
        }
    });

    $('#symbol').click(function(){
        $(this).addClass('shake-hard shake-constant');
        
        setTimeout(function(){
            $('#symbol').removeClass('shake-hard shake-constant');
        console.log("true")},100);
    });

    function timeOut() {
        setTimeout(shake, 3);
    }
});