'use strict';
var data = {
    totalBones:0,
    currentBones:0,
    boneProduction:0,
    achievementLvl:0,
    clicksPerSecond:0,
    powerPawsPowerUps:0,
    powerNosePowerUps:0,
    terrorTailPowerUps:0,
    eagerEarsPowerUps:0,
    stomachOfSteelPowerUps:0,
    boneClick:1,
    bonusOn:false,
    buyPowerPaws:10,
    buyPowerNose:100,
    buyTerrorTail:1000,
    buyEagerEars:10000,
    buyStomachOfSteel:100000
};

$(document).ready(function(){
    
    // Captures the click on the Boxer face
    $('.dogo').click(function() {
        data.currentBones += data.boneClick;  // Adds the current value of a click to current bones
        data.totalBones += data.boneClick;  // Adds current value of a click to total bones
        data.clicksPerSecond += data.boneClick;  // Adds value of click to var to calculate the clicks per second
        $('#currentCounter span').text(Math.floor(data.currentBones).toLocaleString() + " ");  // Updates the span in currentCounter to reflect current bone qty
        checkForBonuses();  // Checks to see if milestone has been achieved
    });

    // These functions add the various power ups
    $('#powerPawsButton').click(function() {
        if (data.currentBones >= data.buyPowerPaws) {
            data.boneClick *= 1.15;
            data.boneProduction *= 1.10;
            data.currentBones-=data.buyPowerPaws;
            data.buyPowerPaws*=1.1;
            updatePowerPawsCost();
            updateCounter();
            updateProductionCounter();
            if (data.powerPawsPowerUps < 9) {
                $('#powerPawsPhotos').append('<img src="img/dogPaws.png">');
                data.powerPawsPowerUps++;
            } else if (data.powerPawsPowerUps === 9) {
                $('#powerPawsPhotos').append('<span></span>');
                data.powerPawsPowerUps++;
                $('#powerPawsPhotos span').text(' +' + (data.powerPawsPowerUps-9));
            } else if (data.powerPawsPowerUps > 9){
                data.powerPawsPowerUps++;
                $('#powerPawsPhotos span').text(' +' + (data.powerPawsPowerUps-9));
            }
        }
    });

    $('#powerNoseButton').click(function() {
        if (data.currentBones >= data.buyPowerNose) {
            data.boneClick *= 1.20;
            data.boneProduction *= 1.15;
            data.currentBones-=data.buyPowerNose;
            data.buyPowerNose*=1.1;
            updatePowerNoseCost();
            updateCounter();
            updateProductionCounter();
            if (data.powerNosePowerUps < 9) {
                $('#powerNosePhotos').append('<img src="img/dogNose.png">');
                data.powerNosePowerUps++;
            } else if (data.powerNosePowerUps === 9) {
                $('#powerNosePhotos').append('<span></span>');
                data.powerNosePowerUps++;
                $('#powerNosePhotos span').text(' +' + (data.powerNosePowerUps-9));
            } else if (data.powerNosePowerUps > 9){
                data.powerNosePowerUps++;
                $('#powerNosePhotos span').text(' +' + (data.powerNosePowerUps-9));
            }
        }
    });

    $('#terrorTailButton').click(function() {
        if (data.currentBones >= data.buyTerrorTail) {
            data.boneClick *= 1.25;
            data.boneProduction *= 1.20;
            data.currentBones-=data.buyTerrorTail;
            data.buyTerrorTail*=1.1;
            updateTerrorTailCost();
            updateCounter();
            updateProductionCounter();
            if (data.terrorTailPowerUps < 9) {
                $('#terrorTailPhotos').append('<img src="img/dogTail.png">');
                data.terrorTailPowerUps++;
            } else if (data.terrorTailPowerUps === 9) {
                $('#terrorTailPhotos').append('<span></span>');
                data.terrorTailPowerUps++;
                $('#terrorTailPhotos span').text(' +' + (data.terrorTailPowerUps-9));
            } else if (data.terrorTailPowerUps > 9){
                data.terrorTailPowerUps++;
                $('#terrorTailPhotos span').text(' +' + (data.terrorTailPowerUps-9));
            }
        }
    });

    $('#eagerEarsButton').click(function() {
        if (data.currentBones >= data.buyEagerEars) {
            data.boneClick *= 1.30;
            data.boneProduction *= 1.25;
            data.currentBones-=data.buyEagerEars;
            data.buyEagerEars*=1.1;
            updateEagerEarsCost();
            updateCounter();
            updateProductionCounter();
            if (data.eagerEarsPowerUps < 9) {
                $('#eagerEarsPhotos').append('<img src="img/dogEars.png">');
                data.eagerEarsPowerUps++;
            } else if (data.eagerEarsPowerUps === 9) {
                $('#eagerEarsPhotos').append('<span></span>');
                data.eagerEarsPowerUps++;
                $('#eagerEarsPhotos span').text(' +' + (data.eagerEarsPowerUps-9));
            } else if (data.eagerEarsPowerUps > 9){
                data.eagerEarsPowerUps++;
                $('#eagerEarsPhotos span').text(' +' + (data.eagerEarsPowerUps-9));
            }
        }
    });

    $('#stomachOfSteelButton').click(function() {
        if (data.currentBones >= data.buyStomachOfSteel) {
            data.boneClick *= 1.35;
            data.boneProduction *= 1.30;
            data.currentBones-=data.buyStomachOfSteel;
            data.buyStomachOfSteel*=1.1;
            updateEagerEarsCost();
            updateCounter();
            updateProductionCounter();
            if (data.stomachOfSteelPowerUps < 9) {
                $('#stomachOfSteelPhotos').append('<img src="img/dogAndCake.png">');
                data.stomachOfSteelPowerUps++;
            } else if (data.stomachOfSteelPowerUps === 9) {
                $('#stomachOfSteelPhotos').append('<span></span>');
                data.stomachOfSteelPowerUps++;
                $('#stomachOfSteelPhotos span').text(' +' + (data.stomachOfSteelPowerUps-9));
            } else if (data.stomachOfSteelPowerUps > 9){
                data.stomachOfSteelPowerUps++;
                $('#stomachOfSteelPhotos span').text(' +' + (data.stomachOfSteelPowerUps-9));
            }
        }
    });
});

// This runs the various functions below once every second
setInterval('runAllOneSecond()', 1000);

function runAllOneSecond() {
    boneOutput();
    updateCounter();
    updateProductionCounter();
    updateClickCounter();
    startBonus();
};

// Runs when called and adds the boneProduction value
function boneOutput() {
    data.currentBones += data.boneProduction;
    data.totalBones += data.boneProduction;
    checkForBonuses();
};
// Updates the counter for current bone total
// Also updates the browser tab with current number of bones
function updateCounter() {
    $('#currentCounter span').text(Math.floor(data.currentBones).toLocaleString() + " ");
    $('title').text(Math.floor(data.currentBones).toLocaleString() + " bones - Fido's Bones");
    checkForBonuses();
};
// Shows how many bones are being produced in background and from clicks
function updateProductionCounter() {
    $('#prodCounter span').text((data.boneProduction+data.clicksPerSecond).toFixed(2).toLocaleString() + " ");
    data.clicksPerSecond = 0;
};
// Shows bones per click
function updateClickCounter() {
    $('#bonesPerClick span').text(data.boneClick.toFixed(2).toLocaleString() + " ");
};

// Following functions update the cost for each of the power ups
function updatePowerPawsCost() {
    $('#powerPawsButton span').text(data.buyPowerPaws.toFixed(0) + " ");
};

function updatePowerNoseCost() {
    $('#powerNoseButton span').text(data.buyPowerNose.toFixed(0) + " ");
};

function updateTerrorTailCost() {
    $('#terrorTailButton span').text(data.buyTerrorTail.toFixed(0) + " ");
};

function updateEagerEarsCost() {
    $('#eagerEarsButton span').text(data.buyEagerEars.toFixed(0) + " ");
};

function updateStomachOfSteelCost() {
    $('#stomachOfSteelButton span').text(data.buyStomachOfSteel.toFixed(0) + " ");
};

// Checks for achievements based on total bones, not current bones.
// data.achievementLvl makes sure that the if increments and doesn't
// stop on one level or feed the same achievement for every click
function checkForBonuses() {
    if (data.totalBones >= 100 && data.achievementLvl === 0) {
        data.boneClick *= 1.10;
        data.boneProduction = 1.05;
        data.achievementLvl++;
    } else if (data.totalBones >= 1000 && data.achievementLvl === 1) {
        data.boneClick *= 1.1;
        data.boneProduction *= 1.15;
        data.achievementLvl++;
    } else if (data.totalBones >= 10000 && data.achievementLvl === 2) {
        data.boneClick *= 1.15;
        data.boneProduction *= 1.20;
        data.achievementLvl++;
    } else if (data.totalBones >= 100000 && data.achievementLvl === 3) {
        data.boneClick *= 1.2;
        data.boneProduction *= 1.25;
        data.achievementLvl++;
    } else if (data.totalBones >= 1000000 && data.achievementLvl === 4) {
        data.boneClick *= 1.2;
        data.boneProduction *= 1.30;
        data.achievementLvl++;
    }
};

// Checks various values and if they are all true, then runs
// displaying a dog and a messsage to click this dog. Also determines 
// if there is currently a bonus active and will not run as if so/
// Called to run every second
function startBonus() {
    let bonusDog = Math.floor((Math.random() * 10)) + 1;
    if (bonusDog % 3 === 0 && Math.floor(data.currentBones) % 9 === 0 && data.bonusOn === false && data.totalBones > 1000) {
        $('.bonusAlert span').text('CLICK THE DOG!');
        $('.bonusDogo').css({'display': 'block'});
        // setTimeout(() => {
        //     $('.bonusAlert span').text('');
        //     $('.bonusDogo').css({'display': 'none'})
        //     data.bonusOn = false;
        // }, 5000);
    }
};

// This if determines the bonus to give the user
// Either a boost to click value or production but some are both.
// One is random and assigns value of the boost based on rand num gen
// Also display the value the user is receiving.    
$('.bonusDogo').click(function() {
    let bonusValue = Math.floor((Math.random() * 17) + 1);
    $('.bonusDogo').css({'display': 'none'});
    $('.bonusAlert span').text('');
    data.bonusOn = true;
    if (bonusValue === 1) {
        data.boneClick*=2;
        $('.bonusAlert span').text('Earning 2x per click!');
        setTimeout(() => {
            data.boneClick/=2;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 2) {
        data.boneClick*=4;
        $('.bonusAlert span').text('Earning 4x per click!');
        setTimeout(() => {
            data.boneClick/=4;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 3) {
        data.boneClick*=6;
        $('.bonusAlert span').text('Earning 6x per click!');
        setTimeout(() => {
            data.boneClick/=6;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 4) {
        data.boneClick*=8;
        $('.bonusAlert span').text('Earning 8x per click!');
        setTimeout(() => {
            data.boneClick/=8;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 5) {
        data.boneClick*=10;
        $('.bonusAlert span').text('Earning 10x per click!');
        setTimeout(() => {
            data.boneClick/=10;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 6) {
        data.boneProduction*=2;
        $('.bonusAlert span').text('Bone Production 2x!');
        setTimeout(() => {
            data.boneProduction/=2;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 7) {
        data.boneProduction*=4;
        $('.bonusAlert span').text('Bone Production 4x!');
        setTimeout(() => {
            data.boneProduction/=4;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 8) {
        data.boneProduction*=6;
        $('.bonusAlert span').text('Bone Production 6x!');
        setTimeout(() => {
            data.boneProduction/=6;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 9) {
        data.boneProduction*=8;
        $('.bonusAlert span').text('Bone Production 8x!');
        setTimeout(() => {
            data.boneProduction/=8;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 10) {
        data.boneProduction*=10;
        $('.bonusAlert span').text('Bone Production 10x!');
        setTimeout(() => {
            data.boneProduction/=10;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 11) {
        data.boneClick*=2;
        data.boneProduction*=10;
        $('.bonusAlert span').text('2x clicks, 10x Production!');
        setTimeout(() => {
            data.boneClick/=2;
            data.boneProduction/=10;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 12) {
        data.boneClick*=4;
        data.boneProduction*=8;
        $('.bonusAlert span').text('4x clicks, 8x Production!');
        setTimeout(() => {
            data.boneClick/=4;
            data.boneProduction/=8;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 13) {
        data.boneClick*=6;
        data.boneProduction*=6;
        $('.bonusAlert span').text('6x clicks and Production!');
        setTimeout(() => {
            data.boneClick/=6;
            data.boneProduction/=6;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 14) {
        data.boneClick*=8;
        data.boneProduction*=4;
        $('.bonusAlert span').text('8x clicks, 4x Production!');
        setTimeout(() => {
            data.boneClick/=8;
            data.boneProduction/=4;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 15) {
        data.boneClick*=10;
        data.boneProduction*=2;
        $('.bonusAlert span').text('10x clicks, 2x Production!');
        setTimeout(() => {
            data.boneClick/=10;
            data.boneProduction/=2;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 16) {
        let bc = (Math.floor(Math.random() * 10) + 1);
        let bp = (Math.floor(Math.random() * 10) + 1);
        data.boneClick*=bc;
        data.boneProduction*=bp;
        $('.bonusAlert span').text(bc + 'x clicks, ' + bp + 'x Production!');
        setTimeout(() => {
            data.boneClick/=4;
            data.boneProduction/=8;
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    } else if (bonusValue === 17) {
        let bonusAmount = ((data.currentBones * .5).toLocaleString).toFixed(0);
        data.currentBones*=1.5;
        $('.bonusAlert span').text(bonusAmount + ' bonus bones!');
        setTimeout(() => {
            $('.bonusAlert span').text('');
            data.bonusOn = false;
        }, 10000);
    }
});
