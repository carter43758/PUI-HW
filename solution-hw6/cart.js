//storage
function saveToLocalStorage() {
    const rollArrayString = JSON.stringify(cart);
    localStorage.setItem('storedItems', rollArrayString);
}

function retrieveFromLocalStorage() {
    const rollArrayString = localStorage.getItem('storedItems');
    const rollArray = JSON.parse(rollArrayString);
    cart = rollArray;
}

if (localStorage.getItem('storedItems') != null) {
    retrieveFromLocalStorage();
}

//initiating for loop - from here https://stackoverflow.com/questions/3842614/how-do-i-call-a-javascript-function-on-page-load
window.onload = function () {   
    for (const newRoll of cart) {
        createItem(newRoll);
    }

    updatePrice();
}

//reflecting new cart with roll info
function createItem(newRoll) {    
    const template = document.querySelector('.originals3');
    const cartTemplate = template.content.cloneNode(true);

    newRoll.element = cartTemplate.querySelector('.roll-element'); // Assigning to the root item element

    //adding remove button so it's clickable (coded in HTML)
    const cartRemove = cartTemplate.querySelector('#remove');
    cartRemove.addEventListener('click', () => { removeItems(newRoll) });

    //adding notecard as child to parent and updating with element & price
    const cartItems = document.querySelector('.items');
    cartItems.appendChild(cartTemplate);

    updateItems(newRoll);
    updatePrice();
    saveToLocalStorage();
}

function updateItems(newRoll) {
    //HTML elements that need updating
    const cartGlaze = newRoll.element.querySelector('.glazing');
    const cartName = newRoll.element.querySelector('.name');
    const cartPack = newRoll.element.querySelector('.pack');
    const cartImg = newRoll.element.querySelector('.original');
    const cartPrice = newRoll.element.querySelector('#price2');

    //copying template content over
    cartGlaze.innerText = "Glazing: " + newRoll.glazing;
    cartPack.innerText = "Pack size: " + newRoll.size;
    cartName.innerText = newRoll.type + " Cinnamon Roll";
    cartPrice.innerText = "$" + calculatePrice(newRoll).toFixed(2);

    cartImg.src = "../assets/products/" + rolls[newRoll.type].imageFile;
    cartImg.alt = newRoll.type + "Cinnamon Roll";
}

function calculatePrice(newRoll) {
    for (let i = 0; i < glazingOptions.length; i++) {
        if (selectGlaze.name === glazingOptions[i].name) {
            glazePrice = glazingOptions[i].priceAdaptation;
        }
    }

    for (let i = 0; i < packSizeOptions.length; i++) {
        if (selectPack.name.toString() === packSizeOptions[i].name) {
            packPrice = packSizeOptions[i].multiplier;
        }
    }

    return ((newRoll.basePrice + glazePrice) * packPrice);
}

//updating price
function updatePrice() {
    let totalPrice = 0;
    
    for (const newRoll of cart)
    {
        totalPrice += calculatePrice(newRoll);
    }

    const priceTotal = document.querySelector('#price3');
    priceTotal.innerText = "$" + totalPrice.toFixed(2);
}

//function to remove from cart on click (coded in HTML)
function removeItems(newRoll) {
    newRoll.element.remove();

    const index = cart.indexOf(newRoll); // Find the index of the roll in the cart
    if (index > -1) {
        cart.splice(index, 1); // Remove the roll from the array
    }

    updatePrice();
    saveToLocalStorage();
}