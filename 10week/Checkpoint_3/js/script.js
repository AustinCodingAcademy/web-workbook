var lipsticks = 0;
var cookieClick=0;
var buyCursor = 0;
var cursors = 0;

function cookieClick(number){
    lipsticks = lipsticks + number;
    document.getElementById("lipsticks").innerHTML = lipsticks;
};

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(lipsticks >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	lipsticks = lipsticks - cursorCost;                          //removes the cookies spent
        document.getElementById('box').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('lipsticks').innerHTML = lipsticks;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){

	cookieClick(cursors);

}, 1000);
