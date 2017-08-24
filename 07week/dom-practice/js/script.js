'use strict';
document.title = 'Manipulating the DOM!';

document.querySelectorAll ('li').length;


document.querySelector ('#P4').remove();
document.querySelector ('ul').insertAdjacentHTML ('beforeend', ['<li>Fifth List Item</li>', '<li>Sixth Element</li>']);
// document.querySelector ('ul').insertAdjacentHTML ('beforeend', );
document.querySelector ('#P1').insertAdjacentHTML ('beforeend', ['<ol><li>List Item A</li></ol>']) ;
document.querySelector ('#div').style.color = 'blue';
