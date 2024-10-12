//initializing cart function, calling cart + Roll class
let cart = [];

class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.element = null;
    }
}

function addToCart(currentRoll) {
    const newRoll = new Roll(currentRoll.type, currentRoll.glazing, currentRoll.size, currentRoll.basePrice);
    cart.push(newRoll);
    saveToLocalStorage();
    return cart;
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
}

//initiating for loop - from here https://stackoverflow.com/questions/3842614/how-do-i-call-a-javascript-function-on-page-load
window.onload = function () {
    for (const newRoll of cart) {
        createItem(newRoll);
    }
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
    let glazePrice = 0;
    for (let i = 0; i < glazingOptions.length; i++) {
        if (newRoll.glazing === glazingOptions[i].name) {
            glazePrice = glazingOptions[i].priceAdaptation;
        }
    }

    let packPrice = 1;
    for (let i = 0; i < packSizeOptions.length; i++) {
        if (newRoll.size.toString() === packSizeOptions[i].name) {
            packPrice = packSizeOptions[i].multiplier;
        }
    }

    return ((newRoll.basePrice + glazePrice) * packPrice);
}

//updating price
function updatePrice() {
    let totalPrice = 0;
    const newPrice = document.querySelector('#price3');
    
    for (const newRoll of cart)
    {
        totalPrice += calculatePrice(newRoll);
    }

    newPrice.innerText = "$" + totalPrice.toFixed(2);
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

const rolls = {
    "Original": {
        name: "Original Cinnamon Roll",
        basePrice: 2.49,
        imageFile: "original-cinnamon-roll.jpg"
    },
    "Apple": {
        name: "Apple Cinnamon Roll",
        basePrice: 3.49,
        imageFile: "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        name: "Raisin Cinnamon Roll",
        basePrice: 2.99,
        imageFile: "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        name: "Walnut Cinnamon Roll",
        basePrice: 3.49,
        imageFile: "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        name: "Double-Chocolate Cinnamon Roll",
        basePrice: 3.99,
        imageFile: "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        name: "Strawberry Cinnamon Roll",
        basePrice: 3.99,
        imageFile: "strawberry-cinnamon-roll.jpg"
    }    
};