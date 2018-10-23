//variable
var clicks = 0; 
//click function
function countClicks() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};

var timer = new Timer();
timer.start({countdown: true, startValues: {seconds: 30}});
$('#countdown .values').html(timer.getTimeValues().toString());
timer.addEventListener('secondsUpdated', function (e) {
    $('#countdown .values').html(timer.getTimeValues().toString());
});
timer.addEventListener('targetAchieved', function (e) {
    $('#countdown .values').html('KABOOM!!');
});