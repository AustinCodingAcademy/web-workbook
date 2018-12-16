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
    setInterval(heat,3000);

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

    $('.button').click(function(){
        let cost = $(this).data('cost');
        let val = $(this).data('val');
        let span = $(this).children('span');

        if(cost <= data.totalCurrent) {
            data.totalCurrent -= parseInt(cost);
            data.totalSHU += parseInt(val);
            span.html(parseInt(span.html() * 1.2));
            $(this).data('cost', parseInt(cost * 1.2));
        }
        updateReport();
        console.log(data.totalSHU);
    });

    let i = 0;

    $('.unlock').click(function(){
        let cost = $(this).data('cost');
        let span = $(this).children('span');
        let type = $('#type').children('span');
        if(cost <= data.totalCurrent) {
            data.totalCurrent -= parseInt(cost);
            data.totalSHU = Math.floor(data.totalSHU * 1.15);
            span.html(parseInt(Math.floor(span.html() * 1.4)));
            $(this).data('cost', parseInt(Math.floor(cost * 1.4)));
            i++;
        }
        updateReport();
        type.text(pepperArray[i]);
    })
    
    $('#research').click(function(){
        let button = $('.button');
        let span = $('label').children('span');
        let cost = $(this).data('cost');
        
        if(button.data('cost') <= data.totalCurrent){
            data.totalCurrent -= parseInt(cost);
            button.each(function(){
                $(this).data('val', $(this).data('val') *2);
            })
            span.each(function(){
                $(this).html($(this).html() * 2);
            })
            $(this).data('cost', Math.floor(cost * 1.8));
            $('#researchCost').html(Math.floor($('#researchCost').html() * 1.8));
        }
        updateReport();
    })
})