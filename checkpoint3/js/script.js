var cookiecount = 0;
var autoClick = 0;
/*********************************
Adds Cookie when Clicked
*********************************/
function add(){
  cookiecount = cookiecount + 1
  update()
}

/*********************************
Updates cookie Count
*********************************/
function update(){
  document.getElementById('text').value=cookiecount;
  document.title=cookiecount + " Cookies";
  document.getElementById('ammountAutoClick').innerHTML = "You Own " + autoClick + " AutoClickers";
  document.getElementById('costAutoClick').innerHTML = ((autoClick + 1) * 12) + " Cookies";
}

function timer(){
  cookiecount = cookiecount + autoClick;
  update()
}
  /* setInterval(Timer , 1000) */

function save(){
  localStorage.setItem("cookiecount",cookiecount);
  localStorage.setItem("autoClick" , autoClick);
}

function load(){
  cookiecount = localStorage.getItem("cookiecount");
  cookiecount = parseInt(cookiecount);
  autoClick = localStorage.getItem("autoClick");
  autoClick = parseInt(autoClick);
  update()
}

function buyAutoClick(){
  if (cookiecount >= ((autoClick + 1) * 12)){
    cookiecount = cookiecount - ((autoClick + 1) * 12);
    autoClick = autoClick + 1;
    update()
  }
}



/*********************************
Zoom for cookie when click
*********************************/
function zoom(a) {
  var x = document.getElementsByTagName("img")[0] ;
  var cookies = document.getElementsByClassName("cookies")[0] ;
  var multiplier = document.getElementsByTagName("span")[0] ; 
    if (a == 1) {
      x.style.width = "65vw" ;
      x.style.height = "65vw" ;
      cookies.style.fontSize = "45px" ;
      cookies.innerText = cookies.innerText.slice(0, -9) * 1 + multiplier.innerText * 1 + " Cookies!" ;
      createNumbers("+" + multiplier.innerText) ;
    } else {
      x.style.width = "60vw" ;
      x.style.height = "60vw" ;
      cookies.style.fontSize = "40px" ;
    }
}

/********************************
 *


// classes
function zoom(a) {
    var x = document.getElementsByTagName("img")[0] ;
    var cookies = document.getElementsByClassName("cookies")[0] ;
    var multiplier = document.getElementsByTagName("span")[0] ;
    if (a == 1) {
        x.style.width = "65vw" ;
        x.style.height = "65vw" ;
        cookies.style.fontSize = "45px" ;
        cookies.innerText = cookies.innerText.slice(0, -9) * 1 + multiplier.innerText * 1 + " Cookies!" ;
        createNumbers("+" + multiplier.innerText) ;
    } else {
        x.style.width = "60vw" ;
        x.style.height = "60vw" ;
        cookies.style.fontSize = "40px" ;
    }
}

function createNumbers(num) {
    var div = document.createElement("div") ;
    div.innerText = num ;
    div.style.fontSize = "25px" ;
    div.style.color = "white" ;
    div.style.fontWeight = "bold" ;
    div.style.position = "fixed" ;
    div.style.top = Math.random() * 66 + 14 + "vh" ;
    div.style.left = Math.random() * 90 + "vw" ;
    div.style.opacity = 1 ;
    document.getElementById("content").appendChild(div) ;
    var hatsyrei = setInterval (function() {
        if (div.style.opacity == 0.1) {
            clearInterval(hatsyrei) ;
            document.getElementById("content").removeChild(div) ;
        } 
        div.style.opacity -= 0.1
    }, 200) ;
}

function upgrade() {
    var cookies = document.getElementsByClassName("cookies")[0] ;
    var multiplier = document.getElementsByTagName("span")[0] ;
    var cost = document.getElementsByTagName("button")[0] ;
    if (cookies.innerText.slice(0, -9) * 1 >= multiplier.innerText * 25) {
        cookies.innerText = cookies.innerText.slice(0, -9) - multiplier.innerText * 25 + " Cookies!" ;
        multiplier.innerText *= 2 ;
        cost.innerHTML = "Upgrade<br>(" + multiplier.innerText * 25 + ")" ;
        cost.style.color = "black" ;
    } else {
        cost.style.color = "red"
    }
}); 