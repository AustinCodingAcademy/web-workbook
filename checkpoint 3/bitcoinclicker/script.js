// Makes the bitcoins appear
function play(){
document.body.innerHTML += "<img src='https://scholarlykitchen.sspnet.org/wp-content/uploads/2016/06/Bitcoin.png' height=\"60\" width=\"60\"></div>";

// counts the clicks
var countField = document.getElementById("count");
var countNumber = parseInt(countField.innerHTML);
countField.innerHTML = countNumber + 1;
}

// Tried to set up incremental alerts but ran out of time
var tenClicks = 10;
function clicks(){
	if(countField == tenClicks){
		alert("you're rich!");
	}
}
