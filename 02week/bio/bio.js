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

function lockHover(_passedValue) {
    console.log("passedValue = " + _passedValue);
    document.getElementById("textChange1").style.display = "inline-block";
}   

function lockLeave(_passedValue) {
    document.getElementById(_passedValue).style.display = "none";
}  

function lockUnlock(articleId){
//var getLockStatus = getElementById
   // if(articalId.background === )
}