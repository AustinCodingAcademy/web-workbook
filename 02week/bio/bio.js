window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "inline-block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function toTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function lockHover(input) {
    document.getElementById('textChange').style.display = "inline-block";
}   

function lockLeave(input) {
    document.getElementById('textChange').style.display = "none";
}  