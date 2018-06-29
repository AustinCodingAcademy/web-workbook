////////////////////
/////jQuery
////////////////////

$



//*************************************
//              JS
//***********************************

var cart = [];
//name, price, count

function Item(name, price, count){
    this.name = name;
    this.price = price;
    this.count = count;
    
    //this.x represents x's properties'.
};


// addItemToCart(name, price, count)

function addItemToCart(name, price, count) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count += count;
            return;
        }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
}

/* addItemToCart("Apple", 1.22, 1);
addItemToCart("Pear", 1.72, 3);
addItemToCart("Apple", 1.22, 1);
addItemToCart("Apple", 1.22, 3);
*/

// removeItemFromCart(name) //removes a single item

function removeItemFromCart(name) {
    for (var i in cart) {
        if (cart[i].name === name) {
            cart[i].count --;
            if (cart[i].count === 0) {
                cart.splice(i,1);
            }
            break;
        }
    }
    saveCart();
}
/*/ console.log(cart[0].count);
removeItemFromCart("Apple");
console.log;*/

// removeItemFromCartAll(name) //removes all of item name

function removeItemFromCartAll(name) {
    for (var i in cart) {
        if (cart[i].name === name){
            cart.splice(i, 1);
            break;
        }
    }
    saveCart();
}

addItemToCart("Apple", 1.22, 1);
addItemToCart("Pear", 1.72, 1);
addItemToCart("Apple", 1.22, 2);
addItemToCart("Apple", 1.22, 1);
addItemToCart("Banana", 1.00, 1);
addItemToCart("Cards", 3.99, 1);
addItemToCart("Milk", 4.29, 1);
addItemToCart("Beer", 2.75, 1);

console.log(cart.length);
console.log(cart);

removeItemFromCart("Milk");

console.log(cart.length);
console.log(cart);

// clearCart() //empties cart

function clearCart(){
    cart = [];
    saveCart();
}
//clearCart();
console.log(cart);

// countCart() -> counts the total number of items in the cart.

function countCart() {
    var totalCount = 0;
    for (var i in cart) {
        totalCount += cart[i].count;
    }
    
    return totalCount;
}

console.log (countCart());

////////
// totalCart() -> totals the cart
///////
function totalCart() {
    var totalCost = 0;
    for (var i in cart) {
        totalCost += cart[i].price;
    }
    return totalCost;
}

console.log(totalCart());


//////////
// listCart() -> array of Item
/////////

function listCart() {
    var cartCopy = [];
    for (var i in cart) {
        var item = cart[i];
        var itemCopy = {};
        for (var p in item) {
            itemCopy[p] = item[p];
        }
        cartCopy.push(itemCopy);
    }
    return cartCopy;
}

console.log(listCart());

////////////
// saveCart()
///////////

function saveCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(cart))
}

//find the file/cookie under Application Tab in dev tools.
//JSON.stringify(x) "translates arrays and JS into strings. The opposite would be JSON.parse(). See below.

////////////
// loadCart()
///////////

function loadCart(){
    cart = JSON.parse(localStorage.getItem("shoppingCart"));
}

///////////////////
//DOM STUFF
//////////////////