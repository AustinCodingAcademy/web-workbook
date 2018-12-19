$(document).ready(() => {
    var $accelerateButton = $('.accelerate');
    var $decreaseButton = $('.decrease');
    var $emergencyBrake = $('.emergencybrake');
    var $turbo = $('.turbo');
    var $lightSpeed = $('.lightspeed');
    var $speedometer = $('.speedometer');
    
    var num = 0;

    $accelerateButton.click(function() {
        num++;
        $speedometer.text(num + 'mph');
    });

    $decreaseButton.click(function() {
        num--;
        $speedometer.text(num + 'mph');
    });

    $emergencyBrake.click(function() {
        (num = 0);
        $speedometer.text(num + 'mph');
    });

    $turbo.click(function() {
        (num+=959);
        $speedometer.text(num + 'mph');
    });

    $lightSpeed.click(function() {
        (num*=num);
        $speedometer.text(num + 'mph');
    });
    
    setInterval(shipShield, 1);

    function shipShield() {
        if (num > 999999999) {
            $speedometer.text('DANGER!');
        }
    }
});