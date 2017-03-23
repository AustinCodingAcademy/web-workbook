$(document).ready(function() {

$(‘[data-stack]’).click(function() {
	console.log($(this).children().last().detach());
});
});

$(document).ready(function() {
	let $block = null;
	$(‘[data-stack]’).click(function() {
		if (!$block) {
			$block = $(this).children().last().detach();
		}	else if (isLegal(this)) {
			$(this).append($block);
			$block = null;
			if (checkForWin()) {
				$('announce-game-won').text('You Win!');
			}
		}
	});
// Stack is just a name, you can name it anything.
	function isLegal(stack) {
		return $block.data('block') < $(stack).children().last().data('block');
	}
// This is the expert on stacks (the plumber)
	function isEmpty(stack) {
		return $(stack).children().length === 0;
	}

	function checkForWin () {
		return $('[data-stack="2"]').children().length === 4 ||
			$('[data-stack="3"]').children().length === 4;
});
