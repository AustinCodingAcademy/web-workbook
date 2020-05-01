'use strict';

$(document).ready(function(){
    var num = 0;
    $('#counter-1').click(function() {
     let num = whatsinth
        num++;
     var whatsinthebox =  $(this).text(num);
     console.log(whatsinthebox)
})

$('#counter-10').click(function() {
    // num = $(this).text(num);
    let num = 10
    num = num+10;
    $(this).text(num);
    })

    $('#counter-100').click(function() {
        // num = $(this).text(num);
        let num = 100
        num = num+100;
        $(this).text(num);
        })






























});