'use strict';


function plusminus_remove(){

  let plusminuscount = document.querySelectorAll('.plus_minus');

  console.log(plusminuscount);
  for (let i=0; i<plusminuscount.length; i++) {
    plusminuscount[i].remove();
  }
}

function plusminus_add(){

  let cartCount = document.querySelectorAll("li").length; 
  let liLoop = document.querySelectorAll('li'), i;

  for ( i=0; i<cartCount; i++) {
    liLoop[i].insertAdjacentHTML('afterbegin', "<a id='plus_"+i+"' class='plus plus_minus' onclick='test(event)'>+</a>" + "<a id='minus_"+i+"' class='minus plus_minus'>-</a>");
  }
}

document.addEventListener("DOMContentLoaded", function(event) {

  let cartCount = document.querySelectorAll("li").length;
  let cartText = "You have " + cartCount + " items in your shopping cart";
  
  alert(cartText);
  document.querySelector("h1").insertAdjacentHTML('afterend','<h2>'+cartText+'</h2>');

  //insert plus and minus while adding id
  plusminus_add();

});

function test(){
  let plusSelector = e.target.id;
  let plusid = "#li_" + plusSelector + "";
  let additemprompt = prompt("Add a new item to the list");

      if (additemprompt == null || additemprompt == "" ){
      return;
      }else {
        plusminus_remove();
      document.querySelector(plusid).insertAdjacentHTML("afterend", "<li>" + additemprompt + "</li>");
  

      plusminus_add();
    
  }
};

/* document.addEventListener("DOMContentLoaded", function clicked(){
  let plusSelector = document.querySelectorAll(".plus");
  for (let i=0; i < plusSelector.length; i++){
    plusSelector[i].addEventListener("click", function(){
      let additemprompt = prompt("Add a new item to the list");
      let li_x = i+1;
      let plusid = "#li_" + li_x + "";
      if (additemprompt == null || additemprompt == "" ){
      return;
      }else {
      document.querySelector(plusid).insertAdjacentHTML("afterend", "<li>" + additemprompt + "</li>");
  
      plusminus_remove();
      plusminus_add();
      }
    });
  }
}); */