//rolls Data
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

const glazingOptions = [
    {name: "Keep Original", priceAdaptation: 0.00},
    {name: "Sugar Milk", priceAdaptation: 0.00},
    {name: "Vanilla Milk", priceAdaptation: 0.50},
    {name: "Double Chocolate", priceAdaptation: 1.50}
];

const packSizeOptions = [
    {name: "1", multiplier: 1},
    {name: "3", multiplier: 3},
    {name: "6", multiplier: 5},
    {name: "12", multiplier: 10}
];

//getting current roll
let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let rollType = params.get('roll');
let currentRoll = rolls[rollType];

//updating text, price, & image
const rollName = document.querySelector('#top1');    
const rollPrice = document.querySelector('#price');
const rollImage = document.querySelector('#original2');
const selectGlaze = document.querySelector('#glazing');
const selectPack = document.querySelector('#pack');

rollName.innerText = currentRoll.name;
rollPrice.innerText = currentRoll.basePrice;
rollImage.src = '../assets/products/' + currentRoll.imageFile;

//pulling selections & setting default values
let glazingPrice = glazingOptions[0].priceAdaptation;
let packPrice = packSizeOptions[0].multiplier;;

window.onload = function selectOption() {
    
    for (i = 0; i < glazingOptions.length; i++)
    {
        let glazingPrice = glazingOptions[i];
        const option = document.createElement('option');
        option.textContent = glazingPrice.name;
        selectGlaze.appendChild(option);
    }
    
    for (i = 0; i < packSizeOptions.length; i++)
    {
        let packPrice = packSizeOptions[i];
        const option = document.createElement('option');
        option.textContent = packPrice.name;
        selectPack.appendChild(option);
    }
}

//updating price
function updatePrice() {   
    let totalPrice = ((currentRoll.basePrice + glazingPrice) * packPrice);
    rollPrice.innerText = "$" + totalPrice.toFixed(2);
}

//reflecting new prices as selections change
function glazingChange(selectGlaze) {
    glazingPrice = glazingOptions.find(glaze => glaze.name === selectGlaze.value).priceAdaptation;
    updatePrice();
}

function packChange(selectPack) {
    packPrice = packSizeOptions.find(pack => pack.name === selectPack.value).multiplier;
    updatePrice();
}

//adding to Cart
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.element = null;
    }
}

const cartButton = document.querySelector('#add');
cartButton.addEventListener('click', () => { addToCart(currentRoll) });

function addToCart(currentRoll) {
    const newRoll = new Roll(currentRoll.type, currentRoll.glazing, currentRoll.size, currentRoll.basePrice);
    cart.push(newRoll);
}