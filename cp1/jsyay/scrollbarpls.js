$('.scrolleft').click(function () {
    console.log('ok')
    $('#scrollbar').animate({
        scrollLeft: '-=153'
    }, 1000, 'easeOutQuad');
});
$('.scrollright').click(function () {
    console.log('ok')
    $('#scrollbar').animate({
        scrollLeft: '+=153'
    }, 1000, 'swings');
});
