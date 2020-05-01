let data = {
    totalCurrent:0, 
  };
//makes timer go by 2 (muffinPower)
let muffinPower = 1;

  //same as $(document).ready(function() {} but shorter
$(function() {
    //javascript clock
    setInterval(timer,1000);
    
$(".muffin").click(function()
{
    //Numbers changes strings to actual numbers, < html treats everything liike string
    //makes the string 0 into a number
    //temporary variable for the number (temp)
    let temp = Number($(".timer").text());
    //number +1
    temp=temp+muffinPower;
    //print back the timer to the script 
    $(".timer").text(temp);  
});

//makes the grandmas helper button work, you buy a gma and your muffins go up by 2
$(".helper").click(function()
{
    //get the number from the timer
    let help = Number($(".timer").text());
    //tagetted the actual number
    let cost = Number($(".gmaCost").text());
    //if number is greater then the cost, then apply gma
if (help>cost){
    //makes the timer go down by the cost
    $(".timer").text(help-cost);
    //when button is applied, make the timer go up by 1 eachtime applied
    muffinPower++;
    $(".gmaCost").text(cost +20);
}
});

//makes the apron button work, you buy an apron and your muffins go up by 1
$(".apron").click(function()
{
    //get the number from the timer
    let apron = Number($(".timer").text());
    //if number is greater the 99, apply apron
if(apron>99){
    //when button is applied, make the timer go up by 2
    apron+=10;
    //removes apron button when applied
    $(".apron").remove();
     //makes the timer go down by 10(cost of apron)
    $(".timer").text(apron-100);
}
});
//makes the oven-mitts button work, you buy an oven mitten and your muffins go up by 40
$(".oven-mitts").click(function()
{
    //get the number from the timer
    let oven = Number($(".timer").text());
    //if number is greater the 499, apply apron
if(oven>499){
    //when button is applied, make the timer go up by 40
    oven+=40;
    //removes apron button when applied
    $(".oven-mitts").remove();
     //makes the timer go down by 500(cost of apron)
    $(".timer").text(oven-500);
}
});
//makes the fan button work, you buy a fan and your muffins go up by 100
$(".fan").click(function()
{
    //get the number from the timer
    let kitchenFan = Number($(".timer").text());
    //if number is greater the 999, apply apron
if(kitchenFan>999){
    //when button is applied, make the timer go up by 100
    kitchenFan+=100;
    //removes apron button when applied
    $(".fan").remove();
     //makes the timer go down by 1000(cost of apron)
    $(".timer").text(kitchenFan-1000);
}
});
//makes the oven-mitts button work, you buy an oven mitten and your muffins go up by 40
$(".monster").click(function()
{
    //get the number from the timer
    let drink = Number($(".timer").text());
    //if number is greater the 99, apply apron
if(drink>1499){
    //when button is applied, make the timer go up by 2
    drink+=500;
    //removes apron button when applied
    $(".monster").remove();
     //makes the timer go down by 10(cost of apron)
    $(".timer").text(drink-1500);
}
});
});


//code that one want to run every cycle


function timer(){
     


}