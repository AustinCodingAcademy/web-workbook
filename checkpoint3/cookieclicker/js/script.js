$(document).ready(function(){
    var counter=0
    var increment = 1
    var realms = ["SKY","SUN","DUSK", "DEEP TWILIGHT","ABYSS OF NIGHT","HEAVEN"]
    var yinyang =0
    
$("#cookie").click(function(){
    counter += increment;
    $("#counter").html("<h1>You've lived "+counter+" lives");

if (counter ===20){
    $("#container").text('YOU ARE IN '+realms[0]+' REALM');
}

if (counter>=20){
    increment = 2;
    $("body").css("background-color","blue");

}
if (counter >= 46){
    $("#warnings").text('Life is good');
}
if (counter === 100){
    $("body").css("background-color","yellow");
    $("#container").text('YOU ARE IN '+realms[1]+' REALM');
    $("#warnings").text(' ');


    alert("10 LIVES PER CLICK")
}
if (counter>=100){
    increment = 10;
    $("body").css("background-color","yellow");
    $("#warnings").text(' ');
}
if (counter === 500){
    $("body").css("background-color","goldenrod");
    $("#container").text('YOU ARE IN '+realms[2]+' REALM');
    $("#warnings").text(' ');
}
if (counter>=500){
    increment = 25;
    $("body").css("background-color","goldenrod");
    $("#warnings").text(' ');
}
if (counter>=700){
    increment = 25;
    $("body").css("background-color","goldenrod");
    $("#warnings").text('All Things Must Pass ');
}
if (counter === 1200){
    $("body").css("background-color","purple");
    $("#container").text('YOU ARE IN '+realms[3]+' REALM');
    $("#warnings").text(' ');
}
if (counter>=1200){
    increment = 100;
    $("body").css("background-color","purple");
    $("#warnings").text('');
}
if (counter>=2000){
    increment = 100;
    $("body").css("background-color","purple");
    $("#warnings").text('Shadows grow longer... taking unseemly forms... Your mind is playing tricks!');
}
if (counter === 5000){
    $("body").css("background-color","purple");
    $("#container").text('YOU ARE IN '+realms[4]+' REALM');
    $("h1").css("color","black");
    $("#warnings").text(' ');
}
if (counter>=5000){
    increment = 100;
    $("body").css("background-color","black");
    $("body").css("color","white");
    $("h1").css("color","black");
    $("#warnings").text('')
}
if (counter>=6000){
    increment = 100;
    $("body").css("background-color","black");
    $("body").css("color","white");
    $("h1").css("color","black");
    $("#warnings").text('Persevere through the black night, Morning may never come.')
}
if (counter === 10000){
    $("body").css("background-color","paleyellow");
    $("#container").text('YOU ARE IN '+realms[5]+' REALM');
    $("h1").css("color","black");
    $("#warnings").text(' ');
}
if (counter>=10000){
    increment = 1000;
    $("body").css("background-color","gold");
    $("#container").text('YOU ARE IN '+realms[5]+' REALM');
    $("#warnings").text('This is Heaven, keep clicking forever in eternal bliss.  ');
}

})
})