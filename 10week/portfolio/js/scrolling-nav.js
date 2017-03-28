$(document).ready(function() {      

// nav shrink function

    $(window).scroll(function() {        
        if ($(document).scrollTop() > 200) {          
            $(".navbar").css({"background-color": "rgba(0,0,0,0.75)", "height": "87px"}); 
            $(".navbar-brand h3").css({"font-size": "26px", "color": "white", "margin-bottom": "1px"});
            $(".design-co").css({"font-size": "11px", "color": "white"});
            $(".navbar-brand div").css("margin-top", "-30px");
            $("li a").css({"font-size": "15px", "color": "white", "margin-top": "-18px"});         
        } else {          
            $(".navbar").css({"background-color": "transparent", "height": "130px"});    
            $(".navbar-brand h3").css({"font-size": "32px", "color": "black", "margin-bottom": "5px"});
            $(".design-co").css({"font-size": "14px", "color": "black"});
            $(".navbar-brand div").css("margin-top", "10px");
            $("li a").css({"font-size": "18px", "color": "black", "margin-top": "0"});      
        }      
    });
 
});
