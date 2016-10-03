$("#projmgr,#dataqc,#skhtml,#skjava").hover(function() {
        $(this).css("background-color","rgb(255, 127, 68)");
        $("H2", this).css("line-height","75px");
        $("H4", this).css("opacity","1");
    },
    function() {
        $(this).css("background-color","rgb(76, 165, 110)");
        $("H2", this).css("line-height","150px");
        $("H4", this).css("opacity","0");
    }
);

$("#busana,#skcss").hover(function() {
        $(this).css("background-color","rgb(255, 127, 68)");
        $("H2", this).css("line-height","75px");
        $("H4", this).css("opacity","1");
    },
    function() {
        $(this).css("background-color","rgb(67, 114, 158)");
        $("H2", this).css("line-height","150px");
        $("H4", this).css("opacity","0");
    }
);
