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