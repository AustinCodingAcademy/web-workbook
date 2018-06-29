'use strict';

$(function () {
    
    //set all the objects in separate variables for a cleaner code.
    var container = $('#container');
    var ship = $('#ship');
    var pole = $('.pole');
    var pole_1 = $('#pole_1');
    var pole_2 = $('#pole_2');
    var score = $('#score');
    var speed_span = $('#speed');
    var restart_btn = $('#restart_btn');
    
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    
    //poles' initial starting positions when each game begins
    var pole_initial_position = parseInt(pole.css('right'));
    var pole_initial_height = parseInt(pole.css('height'));
    
    //the ship's initial position when beginning a game
    var ship_left = parseInt(ship.css('left'));
    var ship_height = parseInt(ship.height());
    
    //initial speed of the game
    var speed = 20;
    var scored = false;
    //ship mechanics declarations. the ship programming will be within var the_game
    var go_up = false;
    var score_updated = false;
    var game_over = false;
   
    //the core game
    var the_game = setInterval(function () {
        
        //end game conditions. the ship cannot collide with the top or bottom of the level nor the poles.
        
        if(collision(ship, pole_1) || collision(ship, pole_2) || parseInt(ship.css('top')) <= 0 || parseInt (ship.css('top')) > container_height - ship_height){
            stop_the_game();
            
        } else {
            
            var pole_current_position = parseInt(pole.css('right'));
            var score_updated = false;
            
            if (pole_current_position > container_width - ship_left) {
                if(!scored) { //score_updated === pole_num
                    score.text(parseInt(score.text())+1);
                    scored = true;
                }

            } else {
                scored = false;
            }
            
        }
        
        
        //this is how the poles will begin moving. this will be an a 40ms interval.
        var pole_current_position = parseInt(pole.css('right'));
        
        //if the pole's current position is greater than the #container's width, then the pole will change to the variable pole_initial_position, which should be a "reset"
        if (pole_current_position > container_width) {
            var new_height = parseInt(Math.random() * 100);
            
            //change the height of the poles. Pole 1 and 2 need to offset each other to give the ship a space to fly through.
            pole_1.css('height', pole_initial_height + new_height);
            pole_2.css('height', pole_initial_height - new_height);
            
            //increase speed
            speed = speed + 2.5;
            speed_span.text(speed);
            
            
            pole_current_position = pole_initial_position            
        }
        
        //move the poles with previously made vars
        pole.css('right', pole_current_position + speed);
        
        if (go_up === false) {
            go_down();
        }
        
    }, 40);
    
    $(document).on('keydown', function (e) {
        var key = e.keyCode;
        if(key === 32 && go_up === false){
            go_up = setInterval(up, 50);
        }
    });
    
    $(document).on('keyup', function (e) {
        var key = e.keyCode;
        if(key === 32) {
            clearInterval(go_up);
            go_up = false;
        }
    });
    
    
    function go_down(){
        ship.css('top', parseInt(ship.css('top')) + 5);
    }
    
    function up (){
        ship.css('top', parseInt(ship.css('top')) - 15);
    }
    
    //how to end the game. death animation
    function stop_the_game(){
        clearInterval(the_game);
        $("#ship").css({"background": "url(explosion.gif)", "height": "150px", "width": "150px", "repeat": "no"},)
        restart_btn.slideDown();
    }
    
    restart_btn.click(function() {
        location.reload();
    })
    
    
    
    
    function collision($div1, $div2) {
        var x1 = $div1.offset().left;
        var y1 = $div1.offset().top;
        var h1 = $div1.outerHeight(true);
        var w1 = $div1.outerWidth(true);
        var b1 = y1 + h1;
        var r1 = x1 + w1;
        var x2 = $div2.offset().left;
        var y2 = $div2.offset().top;
        var h2 = $div2.outerHeight(true);
        var w2 = $div2.outerWidth(true);
        var b2 = y2 + h2;
        var r2 = x2 + w2;

        if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }
    
    //song
    
    
    //background image side-scrolling goodness
    $(function(){
        var x = 0;
        setInterval(function(){
            x-=1;
            $('#container').css('background-position', x + 'px 0');
        }, 2.5);
    })
    
});