]var button = [];

for (var i = 1; i < 10; i++) {
    button[i] = document.getElementById('canvas' + i);

}

var ctx = [];
for (var i = 1; i < 10; i++) {
    ctx[i] = button[i].getContext('2d');

}

/*This will disable the canvas element, will run 9 times but you can only draw on it once*/
var bDisabled = [];
for (var i = 1; i < 10; i++) {
    bDisabled[i] = false;

}

//this will show winner player only one time
var isResult = false;
/*This will hold the value of the canvas element.
Ex- if i click first canvas element with X.
Then canvas[1] will be equal to X. This used to find winning combination
*/
var content = [];

/*this will be equal to whatever the user clicks. Ex- canvas1 =loop1...etc*/
/*If bDiabled= false, then run this if sttement*/
function loop(x) {

    if (!bDisabled[x]) {
        bDisabled[x] = true;
        button[x].style.opacity = 0.7;
        //whichever boxed is picked is set to 'x'
        content[x] = 'x';
        /*rotateY, rotates button on X(from left to right) axis with specified degrees*/
        //Chrome
        button[x].style.webkitTransform = "rotateY(180deg)";
        //for mozilla
        button[x].style.mozTransform = "rotateX(180deg)";
        //for opera
        button[x].style.oTransform = "rotateX(180deg)"; //Ie
        button[x].style.msTransform = "rotateX(180deg)";

        setTimeout(function() {
            /*the timeout function will delay part of the code in the function. X will look like it's draw after square rotated*/

            //ctx means whichever button i select, draw 'x' on it
            ctx[x].lineWidth = 3;
            ctx[x].beginPath();
            ctx[x].moveTo(10, 10);
            ctx[x].lineTo(90, 90);
            ctx[x].moveTo(90, 10);
            ctx[x].lineTo(10, 90);
            ctx[x].stroke();
            ctx[x].closePath();

            computerTurn();
        }, 300);
        /*Since theres a 3 milisecond delay to turn canvas. this delay in chevk winner will be able to check if you or computer won... it has the time to now*/
        setTimeout(checkWinner, 1000);

    }
}


function computerTurn() {
    /*math.random gives number between 0 and 1. It will run once, if the number it generates is already disabled it will run again*/
    //if random number is 0.2, 'o' will be drawn on button2..etc
    var r = Math.random();

    //the computers combos
    // if (content[1] == '0' && content[2] == '0' && !bDisabled[3]) draw0steps(3);
    // else if (content[1] == '0' && content[3] == '0' && !bDisabled[2]) draw0steps(2);
    // else if (content[2] == '0' && content[3] == '0' && !bDisabled[1]) draw0steps(1);
    //
    // else if (content[4] == '0' && content[5] == '0' && !bDisabled[6]) draw0steps(6);
    // else if (content[4] == '0' && content[6] == '0' && !bDisabled[5]) draw0steps(5);
    // else if (content[5] == '0' && content[6] == '0' && !bDisabled[4]) draw0steps(4);
    //
    // else if (content[7] == '0' && content[8] == '0' && !bDisabled[9]) draw0steps(9);
    // else if (content[7] == '0' && content[9] == '0' && !bDisabled[8]) draw0steps(8);
    // else if (content[8] == '0' && content[9] == '0' && !bDisabled[7]) draw0steps(7);
    //
    // else if (content[1] == '0' && content[4] == '0' && !bDisabled[7]) draw0steps(7);
    // else if (content[1] == '0' && content[7] == '0' && !bDisabled[4]) draw0steps(4);
    // else if (content[4] == '0' && content[7] == '0' && !bDisabled[1]) draw0steps(1);
    //
    // else if (content[2] == '0' && content[5] == '0' && !bDisabled[8]) draw0steps(8);
    // else if (content[2] == '0' && content[8] == '0' && !bDisabled[5]) draw0steps(5);
    // else if (content[5] == '0' && content[8] == '0' && !bDisabled[2]) draw0steps(2);
    //
    // else if (content[3] == '0' && content[6] == '0' && !bDisabled[9]) draw0steps(9);
    // else if (content[3] == '0' && content[9] == '0' && !bDisabled[6]) draw0steps(6);
    // else if (content[6] == '0' && content[9] == '0' && !bDisabled[3]) draw0steps(3);
    //
    // else if (content[1] == '0' && content[5] == '0' && !bDisabled[9]) draw0steps(9);
    // else if (content[1] == '0' && content[9] == '0' && !bDisabled[5]) draw0steps(5);
    // else if (content[5] == '0' && content[9] == '0' && !bDisabled[1]) draw0steps(1);
    //
    // else if (content[3] == '0' && content[5] == '0' && !bDisabled[7]) draw0steps(7);
    // else if (content[3] == '0' && content[7] == '0' && !bDisabled[5]) draw0steps(5);
    // else if (content[5] == '0' && content[7] == '0' && !bDisabled[3]) draw0steps(3);

   //counters to the humans moves
    if (content[1] == 'x' && content[2] == 'x' && !bDisabled[3]) draw0Steps(3);
    else if (content[2] == 'x' && content[3] == 'x' && !bDisabled[1]) draw0Steps(1);
    else if (content[1] == 'x' && content[3] == 'x' && !bDisabled[2]) draw0Steps(2);

    else if (content[4] == 'x' && content[5] == 'x' && !bDisabled[6]) draw0Steps(6);
    else if (content[5] == 'x' && content[6] == 'x' && !bDisabled[4]) draw0Steps(4);
    else if (content[4] == 'x' && content[6] == 'x' && !bDisabled[5]) draw0Steps(5);

    else if (content[7] == 'x' && content[8] == 'x' && !bDisabled[9]) draw0Steps(9);
    else if (content[8] == 'x' && content[9] == 'x' && !bDisabled[7]) draw0Steps(7);
    else if (content[7] == 'x' && content[9] == 'x' && !bDisabled[8]) draw0Steps(8);

    else if (content[1] == 'x' && content[4] == 'x' && !bDisabled[7]) draw0Steps(7);
    else if (content[4] == 'x' && content[7] == 'x' && !bDisabled[1]) draw0Steps(1);
    else if (content[1] == 'x' && content[7] == 'x' && !bDisabled[4]) draw0Steps(4);

    else if (content[2] == 'x' && content[5] == 'x' && !bDisabled[8]) draw0Steps(8);
    else if (content[5] == 'x' && content[8] == 'x' && !bDisabled[2]) draw0Steps(2);
    else if (content[2] == 'x' && content[8] == 'x' && !bDisabled[5]) draw0Steps(5);

    else if (content[3] == 'x' && content[6] == 'x' && !bDisabled[9]) draw0Steps(9);
    else if (content[6] == 'x' && content[9] == 'x' && !bDisabled[3]) draw0Steps(3);
    else if (content[3] == 'x' && content[9] == 'x' && !bDisabled[6]) draw0Steps(6);

    else if (content[1] == 'x' && content[5] == 'x' && !bDisabled[9]) draw0Steps(9);
    else if (content[5] == 'x' && content[9] == 'x' && !bDisabled[1]) draw0Steps(1);
    else if (content[1] == 'x' && content[9] == 'x' && !bDisabled[5]) draw0Steps(5);

    else if (content[3] == 'x' && content[5] == 'x' && !bDisabled[7]) draw0Steps(7);
    else if (content[5] == 'x' && content[7] == 'x' && !bDisabled[3]) draw0Steps(3);
    else if (content[3] == 'x' && content[7] == 'x' && !bDisabled[5]) draw0Steps(5);



    else if (r < 0.1 && !bDisabled[1]) draw0Steps(1);
    else if (r < 0.2 && !bDisabled[2]) draw0Steps(2);
    else if (r < 0.3 && !bDisabled[3]) draw0Steps(3);
    else if (r < 0.4 && !bDisabled[4]) draw0Steps(4);
    else if (r < 0.5 && !bDisabled[5]) draw0Steps(5);
    else if (r < 0.6 && !bDisabled[6]) draw0Steps(6);
    else if (r < 0.7 && !bDisabled[7]) draw0Steps(7);
    else if (r < 0.8 && !bDisabled[8]) draw0Steps(8);
    else if (r < 1 && !bDisabled[9]) draw0Steps(9);
    else computerTurn();
}

/*will change the color and will rotate 180 degree when square clicked. Will draw 'o'*/
function draw0Steps(x) {
    bDisabled[x] = true;
    button[x].style.opacity = 0.7;
    content[x] = '0';
    button[x].style.webkitTransform = "rotateX(180deg)";
    //for mozilla
    button[x].style.mozTransform = "rotateX(180deg)";
    //for opera
    button[x].style.oTransform = "rotateX(180deg)";
    //Ie
    button[x].style.msTransform = "rotateX(180deg)";

    setTimeout(function() {

        ctx[x].beginPath();
        ctx[x].lineWidth = 3;
        /*Arc used to make cicrcle. values needed.. 1st how far from left, 2nd how far from top you want center of circle. 3rd is radius of circle. 4th and 5th value are starting and end angle of circle. false means counter clockwise*/
        ctx[x].arc(50, 50, 34, 0, Math.PI * 2, false);
        ctx[x].stroke();
        ctx[x].closePath();

    }, 300);


}
/*runs each time a square is clicked, checks for the winning combinations.*/
function checkWinner() {
    //if isResult is false, the checkWinner function will run
    if (!isResult) {

        //winning combinations for 'x'
        if (content[1] == 'x' && content[2] == 'x' && content[3] == 'x') showWinner('You Win!');
        else if (content[4] == 'x' && content[5] == 'x' && content[6] == 'x') showWinner('You Win!');
        else if (content[7] == 'x' && content[8] == 'x' && content[9] == 'x') showWinner('You Win!');
        else if (content[1] == 'x' && content[4] == 'x' && content[7] == 'x') showWinner('You Win!');
        else if (content[2] == 'x' && content[5] == 'x' && content[8] == 'x') showWinner('You Win!');
        else if (content[3] == 'x' && content[6] == 'x' && content[9] == 'x') showWinner('You Win!');
        else if (content[1] == 'x' && content[5] == 'x' && content[9] == 'x') showWinner('You Win!');
        else if (content[3] == 'x' && content[5] == 'x' && content[7] == 'x') showWinner('You Win!');

        else if (content[1] == '0' && content[2] == '0' && content[3] == '0') showWinner('You Lost!');
        else if (content[4] == '0' && content[5] == '0' && content[6] == '0') showWinner('You Lost!');
        else if (content[1] == '0' && content[4] == '0' && content[7] == '0') showWinner('You Lost!');
        else if (content[2] == '0' && content[5] == '0' && content[8] == '0') showWinner('You Lost!');
        else if (content[3] == '0' && content[6] == '0' && content[9] == '0') showWinner('You Lost!');
        else if (content[1] == '0' && content[5] == '0' && content[9] == '0') showWinner('You Lost!');
        else if (content[3] == '0' && content[5] == '0' && content[9] == '0') showWinner('You Lost!');
        else if (content[3] == '0' && content[5] == '0' && content[7] == '0') showWinner('You Lost!');

        else if (
            /*If all the boxes have 'x' or 'o' written to say its a draw */
            (content[1] == 'x' || content[1] == '0') &&
            (content[2] == 'x' || content[2] == '0') &&
            (content[3] == 'x' || content[3] == '0') &&
            (content[4] == 'x' || content[4] == '0') &&
            (content[5] == 'x' || content[5] == '0') &&
            (content[6] == 'x' || content[6] == '0') &&
            (content[7] == 'x' || content[7] == '0') &&
            (content[8] == 'x' || content[8] == '0') &&
            (content[9] == 'x' || content[9] == '0')
        )
            showWinner('Its A Tie. Play Again!');

    }

}

function showWinner(x) {
    alert(x);
    /*Looks for the winner, if there isn't one yet will remain false. if it is winner its true. computer decides winner only once and game is over*/
    isResult = true;
}


function clearFunction() {
    window.location.reload();
}
