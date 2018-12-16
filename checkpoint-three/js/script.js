$(document).ready(function(){

    var data = {
        totalCurrent: 0,
        totalSHU: 0
    }

    var pepperArray = [
        "Bell", "Melrose", "Italian Sweet", "Paprika Supreme", "Trinidad", "Pimento", "Banana", "Santa Fe", "Anaheim", "Shishito", "Italian Long Hot", "Beaver Dam", "Aji Panca", "Poblano", "Numex Big Jim", "Mulato Chile", "Numex Heritage 6-4", "Mirasol Chile", "Guajillo Chile", "Cacho de Cabra", "Chimayo Chile", "Rezha Macedonian", "Kung Pao", "Jalapeno", "Aleppo", "Ring-O-Fire Cayenne", "Serrano", "Jwala Finger Hot", "Bolivian Rainbow", "Hot Golden Nugget", "Guntur Sannam Chile", "Tabasco", "Super Chili", "Santaka", "Manzano", "Pequin", "Prairie Fire", "Tianjin", "Thai Super Chile", "Tabiche", "Carolina Cayenne", "Rocoto", "Datil", "Habanero", "Tiger Paw Habanero", "Trinidad 7", "Bhut Jolokia", "Super Naga", "Komodo Dragon", "Trinidad Scorpion", "Carolina Reaper", "Dragon's Breath", "Pepper X"
    ]
   
    $('#type').children('span').text(pepperArray[0]);

    function updateReport() {
        $('#scovilles').text(data.totalCurrent);
        $('#perSecond').text(data.totalSHU);
    }

    setInterval(heat,1000);

    function heat() {
        data.totalCurrent += data.totalSHU;
        updateReport();
    }

    $('#pepper').click(function(){
        data.totalCurrent++;
        updateReport();
    });

    function purchase() {
        
    }
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
        let val = $(this).data('val');
        let span = $(this).children('span');
        let type = $('#type').children('span');
        if(cost <= data.totalCurrent) {
            data.totalCurrent -= parseInt(cost);
            data.totalSHU += parseInt(val);
            span.html(parseInt(span.html() * 2));
            $(this).data('cost', parseInt(cost * 2));
            i++;
        }
        updateReport();
        type.text(pepperArray[i]);
    })
        
})