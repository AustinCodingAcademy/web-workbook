var zombie = document.querySelector("#ZombieMale");
var scoreDisplay = document.querySelector("#hitPoint");
var autoClick = document.querySelector("#power10");

var score = 0;

ZombieMale.addEventListener("click", function() {
    score++;
    scoreDisplay.textContent = score;
  })

  var hasAutoClick = false;
  
  power10.addEventListener("click", function() {
  
    //This will increase attack count when power10 is in use
    if (score >= 10 && hasAutoClick === false) 
    {
      setInterval(function() 
      {
        score++;
        scoreDisplay.textContent = score;
      }, 900);
 
      this.textContent = "Auto Click";
      hasAutoClick = true;
    }    
  })
    //This will increase attack count when power100 is in use
  power100.addEventListener("click", function() {
    
      
      if (score >= 100 && hasAutoClick === true) 
      {
        setInterval(function() 
        {
          score++;
          scoreDisplay.textContent = score;
        }, 600);
        
        this.textContent = "Auto Click";
        hasAutoClick = true;
      }    
    })

    //This will increase attack count when power500 is in use
    power500.addEventListener("click", function() {
        
           
          if (score >= 500 && hasAutoClick === true) 
          {
            setInterval(function() 
            {
              score++;
              scoreDisplay.textContent = score;
            }, 100);

            this.textContent = "Auto Click";
            hasAutoClick = true;
          }    
        })