var figure = $("#video1").hover( hoverVideo, hideVideo );

function hoverVideo(e) {
    $('#video1', this).get(0).play();
}

function hideVideo(e) {
    $('#video1', this).get(0).pause();
}
});
