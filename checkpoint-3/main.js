//click counter 
var clicks = 0; 
        function countClicks() {
            clicks += 1;
            document.getElementById("clicks").innerHTML = clicks;
        }