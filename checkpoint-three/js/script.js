$(document).ready(function(){

    // define variable attributes for holding data:
    var data = {
        totalCurrent: 0,
        totalSHU: 0
    }
    // define pepper array for changing pepper type:
    var pepperArray = [
        "Bell", "Melrose", "Italian Sweet", "Paprika Supreme", "Trinidad", "Pimento", "Banana", "Santa Fe", "Anaheim", "Shishito", "Italian Long Hot", "Beaver Dam", "Aji Panca", "Poblano", "Numex Big Jim", "Mulato Chile", "Numex Heritage 6-4", "Mirasol Chile", "Guajillo Chile", "Cacho de Cabra", "Chimayo Chile", "Rezha Macedonian", "Kung Pao", "Jalapeno", "Aleppo", "Ring-O-Fire Cayenne", "Serrano", "Jwala Finger Hot", "Bolivian Rainbow", "Hot Golden Nugget", "Guntur Sannam Chile", "Tabasco", "Super Chili", "Santaka", "Manzano", "Pequin", "Prairie Fire", "Tianjin", "Thai Super Chile", "Tabiche", "Carolina Cayenne", "Rocoto", "Datil", "Habanero", "Tiger Paw Habanero", "Trinidad 7", "Bhut Jolokia", "Super Naga", "Komodo Dragon", "Trinidad Scorpion", "Carolina Reaper", "Dragon's Breath", "Pepper X"
    ]
    // set pepper to the first one
    $('#type').children('span').text(pepperArray[0]);

    //make function to update the shu's per second and total shu count
    function updateReport() {
        $('#scovilles').text(data.totalCurrent);
        $('#perSecond').text(data.totalSHU);

    }

    // set interval for function to execute once every second
    setInterval(heat,2000);

    // add shu's per second number to total shu's
    function heat() {
        data.totalCurrent += data.totalSHU;
        updateReport();
    }

    // add 1 to total scoville's when pepper is clicked:
    $('#pepper').click(function(){
        data.totalCurrent++;
        updateReport();
    });

    // clicking one of the upgrades
    $('.button').click(function(){
        let cost = $(this).data('cost');
        let val = $(this).data('val');
        let span = $(this).children('span');

        if(cost <= data.totalCurrent) {
            // subtract cost of button from total:
            data.totalCurrent -= parseInt(cost);
            // add the per 3 seconds value to the SHUs per 3 seconds:
            data.totalSHU += parseInt(val);
            // make the button 20% more expensive:
            span.html(parseInt(span.html() * 1.2));
            $(this).data('cost', parseInt(cost * 1.2));
        }
        updateReport();
    });

    let i = 0;

    // unlock new pepper button:
    $('.unlock').click(function(){
        let cost = $(this).data('cost');
        let span = $(this).children('span');
        let type = $('#type').children('span');
        if(cost <= data.totalCurrent) {
            // subtract cost of button from total:
            data.totalCurrent -= parseInt(cost);
            // add 15% more units per 3s:
            data.totalSHU = Math.floor(data.totalSHU * 1.15);
            // make next pepper upgrade more expensive:
            span.html(parseInt(Math.floor(span.html() * 1.4)));
            $(this).data('cost', parseInt(Math.floor(cost * 1.4)));
            // advance pepper array variable by 1:
            i++;
        }
        updateReport();
        // change pepper type using array:
        type.text(pepperArray[i]);
    })

    // research better techniques button:
    $('#research').click(function(){
        let button = $('.button');
        let span = $('label').children('span');
        let cost = $(this).data('cost');
        
        if(button.data('cost') <= data.totalCurrent){
            // subtract cost from total:
            data.totalCurrent -= parseInt(cost);
            // go thru each upgrae and double its per 3s value:
            button.each(function(){
                $(this).data('val', $(this).data('val') *2);
            })
            span.each(function(){
                $(this).html($(this).html() * 2);
            })
            // increase cost of research by 80%:
            $(this).data('cost', Math.floor(cost * 1.8));
            $('#researchCost').html(Math.floor($('#researchCost').html() * 1.8));
        }
        updateReport();
    })
})