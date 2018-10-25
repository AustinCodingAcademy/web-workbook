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