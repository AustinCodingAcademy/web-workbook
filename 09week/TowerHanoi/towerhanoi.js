$(function() {
    let $block = null;
    $('[data-stack]').click(function() {
        if (!$block) {
            $block = $(this).children().last().detach();
        } else {
            if ($block.data("block") < $(this).children().last().data()) {
                $(this).append();
            $block = null;
        }}
    })
});
