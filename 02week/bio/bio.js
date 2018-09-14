window.onscroll = function() {
  scrollFunction()
};

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

function lockUnlock(articleId) {
  var getLockStatus = document.getElementById("textChange" + articleId).innerHTML

  if (getLockStatus === "lock") {
    document.getElementById("a" + articleId).style.background = "rgba(65, 63, 63, 1)";
    document.getElementById("textChange" + articleId).innerHTML = "Unlock";
    document.getElementById("changeLock" + articleId).innerHTML = '<img src = "./pics/locked.png" class = "lockImg" id="change">';
    document.getElementById("change").id = ("change" + articleId);
    document.getElementById("change" + articleId).addEventListener("click", function() {
      lockUnlock(articleId);
    }, true);
    document.getElementById("change" + articleId).addEventListener("mouseover", function() {
      lockHover('textChange' + articleId);
    }, true);
    document.getElementById("change" + articleId).addEventListener("mouseout", function() {
      lockLeave('textChange' + articleId);
    }, true);
  } else {
    document.getElementById("a" + articleId).style.background = "";
    document.getElementById("textChange" + articleId).innerHTML = "lock";
    document.getElementById("changeLock" + articleId).innerHTML = '<img src = "./pics/unlocked.png" class = "lockImg" id="change">';
    document.getElementById("change").id = ("change" + articleId);
    document.getElementById("change" + articleId).addEventListener("click", function() {
      lockUnlock(articleId);
    }, true);
    document.getElementById("change" + articleId).addEventListener("mouseover", function() {
      lockHover('textChange' + articleId);
    }, true);
    document.getElementById("change" + articleId).addEventListener("mouseout", function() {
      lockLeave('textChange' + articleId);
    }, true);
  }

}