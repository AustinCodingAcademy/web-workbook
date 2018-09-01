window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("toTop").style.display = "inline-block";
    } else {
        document.getElementById("toTop").style.display = "none";
    }
}

function toTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*
function showStatus(_passedValue) {
    document.getElementById(_passedValue).style.display = "inline-block";
}   

function hideStatus(_passedValue) {
    document.getElementById(_passedValue).style.display = "none";
}  
*/

function lockUnlock(articleId){
    var getLockStatus = document.getElementById("lockStatus"+ articleId).innerHTML

    if(getLockStatus === "Click to lock")
  {

    document.getElementById(articleId).style.transition = "none";
      document.getElementById(articleId).style.background = "(11, 227, 255, 0.9)";
      document.getElementById(articleId).style.hight = "600px";
  }else{

  }
}
      /*document.getElementById("lockStatus"+articleId).innerHTML = "Click to unlock";
     document.getElementById(articleId).addEventListener("click", function(){ lockUnlock(articleId); }, true);
      document.getElementById(articleId).addEventListener("mouseover", function(){ showStatus('lockstatus'+articleId); }, true);
      document.getElementById(articleId).addEventListener("mouseout", function(){ hideStatus('lockstatus'+articleId); }, true);
  }
   else
  {
    document.getElementById("lockStatus"+articleId).innerHTML = "Click to lock";
    document.getElementById(articleId).addEventListener("click", function(){ lockUnlock(articleId); }, true);
    document.getElementById(articleId).addEventListener("mouseover", function(){ showStatus('lockstatus'+articleId); }, true);
    document.getElementById(articleId).addEventListener("mouseout", function(){ hideStatus('lockstatus'+articleId); }, true);
  }
}*/

