$(function() {

// hide certain text when page loads
$('.textLine1').hide();
$('.textLine2').hide();

// Each time user clicks robber, add 1 to "feet"
    $(".running").click(function() {
        if (Number($(".feet").text()) < 100) {
            let temp = Number($(".feet").text()) + 1;
            $(".feet").text(temp);

// When "feet" reads "100" or more, give access to bike and add 10 every click
        } else if (Number($(".feet").text()) < 2640) {
            $(".running").attr("src","css/bicycle.png")
            let temp = Number($(".feet").text()) + 10;
            $(".feet").text(temp);

// When "feet" reads "2,640" or more, give access to car and add 100 every click        
        } else if (Number($(".feet").text()) < 13040) {
            $(".running").attr("src","css/car.png")
            let temp = Number($(".feet").text()) + 100;
            $(".feet").text(temp);
            $('.textLine1').show();

// When "feet" reads "2,640" or more, give access to car and add 100 every click        
} else if (Number($(".feet").text()) < 15840) {
    $(".running").attr("src","css/car.png")
    let temp = Number($(".feet").text()) + 100;
    $(".feet").text(temp);
    $('.textLine1').hide();
    $('.textLine2').show();
            
// When "feet" reads "15,840", alert "Congratulations! You escaped from the police!"
        } else (alert("CONGRATULATIONS! You escaped the police!"));
    })
})