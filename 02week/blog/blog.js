window.onscroll = function() {
  scrollFunction()
};

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

function lockUnlock(articleId) {
  var getLockStatus = document.getElementById("lockStatus" + articleId).innerHTML

  if (getLockStatus === "Click to lock") {
    document.getElementById("lockStatus" + articleId).innerHTML = "Click to unlock"
    document.getElementById(articleId).style.transition = "none";
    document.getElementById(articleId).style.backgroundColor = "rgba(65, 63, 63, 0.9)";
    document.getElementById(articleId).style.height = "600px";
  } else {
    document.getElementById("lockStatus" + articleId).innerHTML = "Click to lock"
    document.getElementById(articleId).style.transition = null;
    document.getElementById(articleId).style.height = null;
    document.getElementById(articleId).style.backgroundColor = null;
  }
}
