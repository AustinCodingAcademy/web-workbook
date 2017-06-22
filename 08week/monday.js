$(document).ready(function(){
  var button1 = 0,
      button2 = 0,
      button3 = 0,

  var click1 = function(){
      button1++;
      $('span').text('button1 has been clicked ' + button1 + ' times');
      }
  var click2 = function(){
      button2++;
      $('span').text('button2 has been clicked ' + button2 + ' times');
    }
  var click3 = function(){
      button3++;
      $('span').text('button1 has been clicked ' + button3 + ' times');
    }
      $('#button1').click(click1);
      $('#button2').click(click2);
      $('#button3').click(click3);
});













//re-write to clean up code

$(document).ready(function (){
  var box1 = 0,
      box10 = 0,
      box100 = 0;
  var click = function (event){
    var counter;
    switch(event.target.id){
      case 'button1':
      button1++;
      counter = button1;
      break;
      case 'button1':
      button1++;
      counter = button1;
      break;
      case 'button1':
      button1++;
      counter = button1;
      break;
    }
    $('span').text(event.target.id + counter);
  }

  $('button').click(click);
});
