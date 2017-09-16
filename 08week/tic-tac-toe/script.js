'use strick';
$(document).ready(function() {
  var playerOne = 'X';
  var playerTwo = 'O';
  var turn = 1;
  var played = false;
  var sound = document.createElement('audio');
  sound.setAttribute('src', 'sonic1.mp3');
  $.get();
  var played1 = false;
  var sound1 = document.createElement('audio');
  sound1.setAttribute('src', 'sonic2.mp3');
  $.get();
  var p1 = false;
  var noise = document.createElement('audio');
  noise.setAttribute('src', 'p1.mp3');
  $.get();
  var p2 = false;
  var jangle = document.createElement('audio');
  jangle.setAttribute('src', 'p2.mp3');
  $.get();
  var sound = document.createElement('audio');
  sound.setAttribute('src', 'play_a_game.mp3');
  $.get();
  // $('body').click(function(){
  //   sound.play();
  // });
  window.alert("Shall we play a Game? A win is accomplished by re-stacking the tower on only the last column with the largest piece on the bottom. You may only move the top piece at any given time")
  sound.play();

  $('[data-cell]').click(function() {
    // sound.play();
    // played = true;
    // console.log("Playing");
  });
  $('[data-cell]').click(function() {

    if (turn % 2 === 1) {
      $(this).text(playerOne);
      checkPlayerWin(playerOne);
      sound.play();
    } else {
      $(this).text(playerTwo);
      checkPlayerWin(playerTwo);
      sound1.play();
    }
    turn++;
  });
  $("button").on('click', function(event) {
    // event.preventDefault();
    console.log("clear button pushed");
    $("div .box[data-cell], #clear,  #announce-winner").fadeOut(1000, function() {
      $("div .box[data-cell]").empty();
      $('#announce-winner').empty();
      $("div .box, #clear,  #announce-winner").fadeIn(1000);
      // playerTurn = 'X';
    })
  })

  //check winner
  // if (checkPlayerWin()) {
  //
  //   $('#announce-winner').text('playerOne' + "Wins");
  //   alert('this is a start!');
  // }


  function checkPlayerWin(player) {
    if (($('[data-cell="0"]').text() === playerOne) && ($('[data-cell="1"]').text() === playerOne) && ($('[data-cell="2"]').text() === playerOne) ||
      ($('[data-cell="3"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="5"]').text() === playerOne) ||
      ($('[data-cell="6"]').text() === playerOne) && ($('[data-cell="7"]').text() === playerOne) && ($('[data-cell="8"]').text() === playerOne) ||
      ($('[data-cell="6"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="2"]').text() === playerOne) ||
      ($('[data-cell="8"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="0"]').text() === playerOne) ||
      ($('[data-cell="0"]').text() === playerOne) && ($('[data-cell="3"]').text() === playerOne) && ($('[data-cell="6"]').text() === playerOne) ||
      ($('[data-cell="1"]').text() === playerOne) && ($('[data-cell="4"]').text() === playerOne) && ($('[data-cell="7"]').text() === playerOne) ||
      ($('[data-cell="2"]').text() === playerOne) && ($('[data-cell="5"]').text() === playerOne) && ($('[data-cell="8"]').text() === playerOne)) {

      // alert("Player \ " + player + "\ Wins!");
      console.log("Player \ " + player + "\ Wins!");
      $('#announce-winner').text("Player \ " + player + "\ Wins!");
      noise.play();


      // (($('[data-cell="0"]').text() === "playerTwo" && $('[data-cell="1"]').text() === "playerTwo" && $('[data-cell="2"]').text() === "playerTwo") {
      //    console.log('playerTwo');

      // if (($('[data-cell="0"]').text()) === player) {
      // return true;
    } else if (($('[data-cell="0"]').text() === playerTwo) && ($('[data-cell="1"]').text() === playerTwo) && ($('[data-cell="2"]').text() === playerTwo) ||
      ($('[data-cell="3"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="5"]').text() === playerTwo) ||
      ($('[data-cell="6"]').text() === playerTwo) && ($('[data-cell="7"]').text() === playerTwo) && ($('[data-cell="8"]').text() === playerTwo) ||
      ($('[data-cell="6"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="2"]').text() === playerTwo) ||
      ($('[data-cell="8"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="0"]').text() === playerTwo) ||
      ($('[data-cell="0"]').text() === playerTwo) && ($('[data-cell="3"]').text() === playerTwo) && ($('[data-cell="6"]').text() === playerTwo) ||
      ($('[data-cell="1"]').text() === playerTwo) && ($('[data-cell="4"]').text() === playerTwo) && ($('[data-cell="7"]').text() === playerTwo) ||
      ($('[data-cell="2"]').text() === playerTwo) && ($('[data-cell="5"]').text() === playerTwo) && ($('[data-cell="8"]').text() === playerTwo)) {



      // alert("Player \ " + player + "\ Wins!");
      console.log("Player \ " + player + "\ Wins!");
      $('#announce-winner').text("Player \ " + player + "\ Wins!");
      jangle.play();

      // console.log('playerTwo wins');

    }


  }
  // return false;


});
(function ($) {

  // Detect touch support
  $.support.touch = 'ontouchend' in document;

  // Ignore browsers without touch support
  if (!$.support.touch) {
    return;
  }

  var mouseProto = $.ui.mouse.prototype,
      _mouseInit = mouseProto._mouseInit,
      _mouseDestroy = mouseProto._mouseDestroy,
      touchHandled;

  /**
   * Simulate a mouse event based on a corresponding touch event
   * @param {Object} event A touch event
   * @param {String} simulatedType The corresponding mouse event
   */
  function simulateMouseEvent (event, simulatedType) {

    // Ignore multi-touch events
    if (event.originalEvent.touches.length > 1) {
      return;
    }

    event.preventDefault();

    var touch = event.originalEvent.changedTouches[0],
        simulatedEvent = document.createEvent('MouseEvents');

    // Initialize the simulated mouse event using the touch event's coordinates
    simulatedEvent.initMouseEvent(
      simulatedType,    // type
      true,             // bubbles
      true,             // cancelable
      window,           // view
      1,                // detail
      touch.screenX,    // screenX
      touch.screenY,    // screenY
      touch.clientX,    // clientX
      touch.clientY,    // clientY
      false,            // ctrlKey
      false,            // altKey
      false,            // shiftKey
      false,            // metaKey
      0,                // button
      null              // relatedTarget
    );

    // Dispatch the simulated event to the target element
    event.target.dispatchEvent(simulatedEvent);
  }

  /**
   * Handle the jQuery UI widget's touchstart events
   * @param {Object} event The widget element's touchstart event
   */
  mouseProto._touchStart = function (event) {

    var self = this;

    // Ignore the event if another widget is already being handled
    if (touchHandled || !self._mouseCapture(event.originalEvent.changedTouches[0])) {
      return;
    }

    // Set the flag to prevent other widgets from inheriting the touch event
    touchHandled = true;

    // Track movement to determine if interaction was a click
    self._touchMoved = false;

    // Simulate the mouseover event
    simulateMouseEvent(event, 'mouseover');

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');

    // Simulate the mousedown event
    simulateMouseEvent(event, 'mousedown');
  };

  /**
   * Handle the jQuery UI widget's touchmove events
   * @param {Object} event The document's touchmove event
   */
  mouseProto._touchMove = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Interaction was not a click
    this._touchMoved = true;

    // Simulate the mousemove event
    simulateMouseEvent(event, 'mousemove');
  };

  /**
   * Handle the jQuery UI widget's touchend events
   * @param {Object} event The document's touchend event
   */
  mouseProto._touchEnd = function (event) {

    // Ignore event if not handled
    if (!touchHandled) {
      return;
    }

    // Simulate the mouseup event
    simulateMouseEvent(event, 'mouseup');

    // Simulate the mouseout event
    simulateMouseEvent(event, 'mouseout');

    // If the touch interaction did not move, it should trigger a click
    if (!this._touchMoved) {

      // Simulate the click event
      simulateMouseEvent(event, 'click');
    }

    // Unset the flag to allow other widgets to inherit the touch event
    touchHandled = false;
  };

  /**
   * A duck punch of the $.ui.mouse _mouseInit method to support touch events.
   * This method extends the widget with bound touch event handlers that
   * translate touch events to mouse events and pass them to the widget's
   * original mouse event handling methods.
   */
  mouseProto._mouseInit = function () {

    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.bind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse init method
    _mouseInit.call(self);
  };

  /**
   * Remove the touch event handlers
   */
  mouseProto._mouseDestroy = function () {

    var self = this;

    // Delegate the touch handlers to the widget's element
    self.element.unbind({
      touchstart: $.proxy(self, '_touchStart'),
      touchmove: $.proxy(self, '_touchMove'),
      touchend: $.proxy(self, '_touchEnd')
    });

    // Call the original $.ui.mouse destroy method
    _mouseDestroy.call(self);
  };

})(jQuery);
//investigate (is)
