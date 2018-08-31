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
    document.getElementById(_passedValue).style.display = "inline-block";
}   

function lockLeave(_passedValue) {
    document.getElementById(_passedValue).style.display = "none";
}  

function lockUnlock(articleId){
    var grabLockPictureDiv = ("changeLock" + articleId)
    var getTxtChangeId = (" textchange"+ articleId)
    var getLockStatus = document.getElementById("textChange"+ articleId).innerHTML

    if(getLockStatus === "lock")
  {
      document.getElementById("a"+articleId).style.background = "rgba(39, 39, 39, 1)";
      document.getElementById("textChange"+ articleId).innerHTML = "Unlock";
      document.getElementById("changeLock"+ articleId).innerHTML = '<img src = "./pics/locked.png" class = "lockImg" id="change">';
      document.getElementById("change").addEventListener("click", function(){ lockUnlock(articleId); }, true);
      //document.getElementById("change").addEventListener("mouseover", function(){ lockHover('textChange'+articleId); }, true);
      //document.getElementById("change").addEventListener("mouseout", function(){ lockUnlock('textChange'+articleId); }, true);
  }
   else
  {
    document.getElementById("a"+articleId).style.background = "rgba(39, 39, 39, 0)";
    document.getElementById("textChange"+ articleId).innerHTML = "lock";
    document.getElementById("changeLock"+ articleId).innerHTML = '<img src = "./pics/unlocked.png" class = "lockImg" id="change">';
    document.getElementById("change").addEventListener("click", function(){ lockUnlock(articleId); }, true);
    //document.getElementById("change").addEventListener("mouseover", function(){ lockHover('textChange'+articleId); }, true);
    //document.getElementById("change").addEventListener("mouseout", function(){ lockUnlock('textChange'+articleId); }, true);
  }

}


function make(tag_name, opt) {
    var ele = document.createElement(tag_name);
    if (!opt) {
      return ele;
    }
    opt = opt || {};
    opt.classList = opt.classList || [];
    opt.attr = opt.attr || {};
  
    opt.classList.forEach(function(v) {
      ele.classList.add(v);
    });
    if (opt.text) {
      ele.textContent = opt.text;
    }
    if (opt.html) {
      ele.innerHTML = opt.html;
    }
    if (opt.id) {
      ele.id = opt.id;
    }
    if (opt.value) {
      ele.value = opt.value;
    }
    for (var k in opt.attr) {
      if (opt.attr.hasOwnProperty(k)) {
        ele.setAttribute(k, opt.attr[k]);
      }
    }
    if (opt.append) {
      ele.appendChild(opt.append);
    }
    if (opt.appendTo) {
      if (typeof opt.appendTo === 'string') {
        opt.appendTo = document.getElementById(opt.appendTo);
      }
      opt.appendTo.appendChild(ele);
    }
  
    return ele;
  }