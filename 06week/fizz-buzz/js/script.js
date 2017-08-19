'use strict';
/*
$(document).ready(function(){
*/
function fizzBuzz(){
	for(var i=1;i<=100;i++){
		if(i % 5 === 0 && i % 3 === 0){
			console.log('FizzBuzz');
		} else if(i % 3 === 0){
			console.log('Fizz');
		} else if(i % 5 === 0){
			console.log();('Buzz');
		} else {
			console.log(i);
		}
	}
}
/*
})
