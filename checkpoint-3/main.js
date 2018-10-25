//variable starting value of clicks
var clicks = 0; 
//click function
function countClicks() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
};
//timer variable how long the timer is set
var count=30;

 //1000 will  run it every 1 second
var counter=setInterval(timer, 1000);

//timer function
function timer()
{
  count=count-1;
  if (count <= -1)
  {
     clearInterval(counter);
     return;
  }

  document.getElementById("timer").innerHTML=count + " secs"; 

}

