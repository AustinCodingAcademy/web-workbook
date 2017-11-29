'use strict';

// document.addEventListener("DOMContentLoaded", () => {
    // You code here
    window.onload=function(){
    var list = document.getElementsByTagName('ul');
      var count = 'this page has ' + list[0].children.length + ' list items';
      let listItems = document.getElementsByTagName('li');
      let newButton = document.createElement('button');
      let buttonText='Remove';
      newButton.innerHTML=buttonText;
      console.log('a thing', listItems.length);
        for (let i=0;i<listItems.length; i++){
        // listItems[i].insertAdjacentHTML('afterEnd',newButton);
        console.log(i);
        listItems[i].parentNode.insertBefore(newButton, listItems[i].nextSibling);
      }


      // listItems.appendChild(newButton);

      // alert(count);

    var newElement = document.createElement('h2');
    newElement.innerHTML="You have " + list[0].children.length + " items in your shopping cart";

    document.getElementsByTagName('h1')[0].appendChild(newElement);


    }
    function addItem(){
        var text=document.getElementById("buy-it").value;
        var newItem=document.createElement('li');
        let newButton = document.createElement('button');
        let buttonText='Remove';
        // newItem.setAttribute('id',text);

        newButton.innerHTML=buttonText;
        newButton.onclick=deleteItem();
        newItem.innerHTML=text;

        document.getElementsByTagName('ul')[0].appendChild(newItem);

        // newItem.appendChild(newButton);
    }
    // function deleteItem(){
    //   let list=document.getElementsByTagName('ul')[0];
    //   list.removeChild(this);
    //
    // }

// });
