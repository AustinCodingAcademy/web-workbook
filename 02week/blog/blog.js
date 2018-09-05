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

function lockUnlock(articleId){
    var getLockStatus = document.getElementById("lockStatus"+ articleId).innerHTML

    if(getLockStatus === "Click to lock")
  {
    document.getElementById("lockStatus"+ articleId).innerHTML = "Click to unlock"
    document.getElementById(articleId).style.transition = "none";
    document.getElementById(articleId).style.backgroundColor = "rgba(65, 63, 63, 0.9)";
    document.getElementById(articleId).style.height = "600px";
  }else{
    document.getElementById("lockStatus"+ articleId).innerHTML = "Click to lock"
    document.getElementById(articleId).style.transition = null;
    document.getElementById(articleId).style.height = null;
    document.getElementById(articleId).style.backgroundColor = null;
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
/*
width: 100%;
transition: width 2s, height 2s, background-color 3s;
transition-delay: .5s;
height: 100px;
margin-top:10px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
background-color: rgba(11, 227, 255,0.6);
overflow: hidden;  */