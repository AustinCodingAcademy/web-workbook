body {
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  background-color: #222222;
  background: repeating-linear-gradient(45deg, #2b2b2b 0%, #2b2b2b 10%, #222222 0%, #222222 50%) 0 / 15px 15px;
  color: white;
}
/* Title Neon effect */
.button {
  display: inline-block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  font: normal 48px/normal "Warnes", Helvetica, sans-serif;
  color: rgba(255,255,255,1);
  text-decoration: normal;
  text-align: center;
  -o-text-overflow: clip;
  text-overflow: clip;
  white-space: pre;
  text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #ff00de , 0 0 70px #ff00de , 0 0 80px #ff00de , 0 0 100px #ff00de ;
  -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
}

.button:hover {
  text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #00ffff , 0 0 70px #00ffff , 0 0 80px #00ffff , 0 0 100px #00ffff ;
}

/* Stack Style */

[data-stack] {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  margin: 100px;
  background-color: black;
}

[data-stack]:hover{
  background-color: white;

}

/* Block style */


[data-block] {
  width: 25px;
  float: left;
  background-color: black;
  border: solid white .5px;
}

[data-block="25"] {
  height: 50px;
}

[data-block="50"] {
  height: 75px;
}

[data-block="75"] {
  height: 100px;
}

[data-block="100"] {
  height: 125px;
}


#announce-game-won {
  display: inline-block;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  border: none;
  font: normal 48px/normal "Warnes", Helvetica, sans-serif;
  color: rgba(255,255,255,1);
  text-decoration: normal;
  text-align: center;
  -o-text-overflow: clip;
  text-overflow: clip;
  white-space: pre;
  text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #ff00de , 0 0 70px #ff00de , 0 0 80px #ff00de , 0 0 100px #ff00de ;
  -webkit-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -moz-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  -o-transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
  transition: all 200ms cubic-bezier(0.42, 0, 0.58, 1);
}

/* Winner Neon effect */

#announce-game-won:hover {
  text-shadow: 0 0 10px rgba(255,255,255,1) , 0 0 20px rgba(255,255,255,1) , 0 0 30px rgba(255,255,255,1) , 0 0 40px #00ffff , 0 0 70px #00ffff , 0 0 80px #00ffff , 0 0 100px #00ffff ;
}
