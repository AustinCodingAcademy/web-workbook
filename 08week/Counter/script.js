window.onload = function(){
alert('Are you ready to count by ones, tens, and hundred?');
}


$(document).ready(function() {

$('#counter-1').click(   

function(){
let num = Number ($(this).text());
num++;
$(this).text(num);
})


 $('#counter-10').click(   

function(){
 let numTwo = Number ($(this).text());
 numTwo +=10;
 $(this).text(numTwo);
 })

 $('#counter-100').click(   

    function(){
    let numThree = Number ($(this).text());
    numThree +=100;
    $(this).text(numThree);
    })

    $('#counterAll').click(   

        function(){
         $('#counter-1, #counter-10, #counter-100').click();

        })



    // var num = 0;
    // $('.box').click(function() {
    //   num++;
    //   $(this).text(num);
    // })
});


/* comment */
/* comment */