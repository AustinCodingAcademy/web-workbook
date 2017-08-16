'use strict';

$(document).on('ready', function() {

  // ****
  // jQuery
  // ****

  // ****
  // element selectors
  // ****

  // Problem 1:
  // select the h1 element
  // assign the selected jQuery object to the property window.h1
  window.h1 = $('h1');

  // Problem 2:
  // select the p element
  // assign the selected jQuery object to the the property window.p
  window.p = $('p');

  // ****
  // id selectors
  // ****

  // Problem 3:
  // select the element with id="main"
  // assign the selected jQuery object to the property window.idMain
  window.idMain = $('#main');

  // Problem 4:
  // select the element with id="secondary"
  // assign the selected jQuery object to the the property window.idSecondary
  window.idSecondary = $('#secondary');

  // ****
  // class selectors
  // ****

  // Problem 5:
  // select the element with class="container"
  // assign the selected jQuery object to the property window.container
  window.container = $('.container');

  // Problem 6:
  // select the elements with class="item"
  // assign the selected jQuery object to the the property window.items
  window.items = $('.items');

  // ****
  // attribute selectors
  // ****

  // Problem 7:
  // select the element with the data-id attribute
  // assign the selected jQuery object to the property window.dataId
  window.dataId = $('[data-id]');

  // Problem 8:
  // select the element with the data-price attribute
  // assign the selected jQuery object to the the property window.dataPrice
  window.dataPrice = $('[data-price]');

  // ****
  // dom manipulation
  // ****

  // Problem 9:
  // select the element with id="insert-text"
  // then set the text of this element to "Text Has Been Inserted"
  $('#insert-text').text('Text Has Been Inserted');

  // Problem 10:
  // select the element with id="add-attribute"
  // add the attribute data-color="red" to that element
  $('#add-attribute').

  // Problem 11:
  // select the element with id="data-element"
  // and set window.dataIdValue to the value of the data-id attribute of the element
  // you can do this by calling .data() on the selected element
  dataId = $('#data-element').data();
  window.dataIdValue = dataId;

  // Problem 12:
  // select the element with id="data-element"
  // and set its text (.text()) to the value of the data-content attribute
  
});
