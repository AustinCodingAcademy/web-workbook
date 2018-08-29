
//for later use
function launchModal(){
    var linebreak = [];
        for (i = 0; i <= 50; i++) {
            linebreak.push(document.createElement("br"));
    }
    var modal = document.getElementById('bioModal');
    var span = document.getElementsByClassName("close")[0];	
        if (toBeDetermined){
        modal.style.display = "block";
        }else{
    
    }
    span.onclick = function() {modal.style.display = "none";}
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    }