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
    var grabLockPictureDiv = ("changeLock" + articleId)
    var getTxtChangeId = ("textchange"+ articleId)
    var getLockStatus = document.getElementById(getTxtChangeId).innerhtml
    if(getLockStatus && getLockStatus === "lock"){
        getLockStatus = "Unlock";
        make("img", {id})
        //document.getElementById(grabLockPictureDiv).innerHTML = '<img src = "./pics/locked.png" class = "lockImg" onclick = "lockUnlock(articleId)" onmouseover="lockHover(getTxtChangeId)" onmouseout="lockLeave(getTxtChangeId)">'
        var newlock = make("img", { id: "a"+ articleId, classList: ["lockImg"], attr: {"value": './pics/unlocked.png'}});
        
    }
   else
   {
    getLockStatus = "lock";
   // document.getElementById(grabLockPictureDiv).innerHTML = '<img src = "./pics/locked.png" class = "lockImg" onclick = "lockUnlock(articleId)" onmouseover="lockHover(getTxtChangeId)" onmouseout="lockLeave(getTxtChangeId)">'
   }

}

//Example: make("input", { id: 'example', classList: ["button"], attr: {  "type": "button", "value": 'test', "onclick": "function();" }});
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