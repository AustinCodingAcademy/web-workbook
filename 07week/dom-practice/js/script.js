
document.addEventListener("DOMContentLoaded", function(event) {

    // You code here
  var listOfItems = document.getElementsByTagName('li');


  alert('Number of items: ' + listOfItems.length);

  var subtitle = '<h2>You have ' + listOfItems.length + ' items in your shopping cart</h2>';

  var d1 = document.getElementById('title');
  d1.insertAdjacentHTML('afterend', subtitle);

});

funtion addItem() {
var newitem = prompt('Enter new item');
newitem = '<li>' +newitem + '</li>';
var list = document.getElementById('list');
}
