
var dabcount = 0;

// counting system

function dabMan() {
    dabcount = dabcount + 1
    document.getElementById('text').value = dabcount;
    console.log("dabMan", dabMan)

    document.getElementById('squiddab').src = "./squid-dab2.gif";
    console.log("changeimage", dabMan)
    document.getElementById('hideaway').style.display = 'block';

    // Audio and changing the image back
    setTimeout(function(){ 
        document.getElementById('squiddab').src = "./squid-dab1.gif";
        console.log("changeimage", dabMan);
        var audio = new Audio('./youtube_16079.mp3');
        audio.play();
    }, 219.05 );
    
    setTimeout(function(){
        document.getElementById('hideaway').style.display = 'none';
    }, 300.98 );

    
}

// reward system
// 15 rare sideways dab with adlib
// 18 upside down fire dab with audio adlib

