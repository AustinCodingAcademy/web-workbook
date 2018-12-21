$(document).ready(() => {

    // jQuery Object variables
    var $accelerateButton = $('.accelerate');
    var $decreaseButton = $('.decrease');
    var $emergencyBrake = $('.emergencybrake');
    var $turbo = $('.turbo');
    var $lightSpeed = $('.lightspeed');
    var $speedometer = $('.speedometer');
    var $flame = $('.flame');
    
    var num = 0;

    //increase speed by 1
    $accelerateButton.click(function() {
        num++;
        $speedometer.text(num + 'mph');
    });

    $decreaseButton.click(function() {
        num--;
        $speedometer.text(num + 'mph');
    });
    //decrease speed by 1
    $emergencyBrake.click(function() {
        (num = 0);
        $speedometer.text(num + 'mph');
    });
    //turbo effect, speed increase by 959
    $turbo.click(function() {
        (num+=959);
        $speedometer.text(num + 'mph');
    });
    //LightSpeed effect, speed multiplier by 10 times       
    $lightSpeed.click(function() {
        (num*=10);
        $speedometer.text(num + 'mph');
    });
    

    //Speedometer Text if the Buttons are clicked too many times.
    setInterval(shipShield, 1);

    function shipShield() {
        if (num > 999999999 && num <= 9999999999) {
            $speedometer.text('DANGER!');
        } else if (num >= 10000000000 && num <= 999999999999) {
            $speedometer.text('ENGINE 50%');
        } else if (num >= 1000000000000) {
            $speedometer.text('ENGINE 0%');
            $emergencyBrake.click(function() {
                $emergencyBrake.off("click");
            });
        }
    }


    //Flame appears once ship starts to move
    setInterval(flameOn, 10);

    $flame.hide();

    function flameOn() {
        if (num > 0 ) {
            $flame.show();
        } else {
            $flame.hide();
        }
    }

});