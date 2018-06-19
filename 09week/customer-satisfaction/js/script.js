$(documnt).ready(function (e){
    e.preventDefault();
    $('#reset').on('click', function (){        
        $(this).empty();          
    });
});