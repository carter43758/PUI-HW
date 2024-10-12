//getting current roll
let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let rollType = params.get('roll');
let currentRoll = rolls[rollType];

//updating text, price, & image
const rollText = document.querySelector('#top1');    
const rollPrice = document.querySelector('#price');
const rollImage = document.querySelector('#original2');

rollText.innerText = currentRoll.name;
rollPrice.innerText = currentRoll.basePrice;
rollImage.src = '../assets/products/' + currentRoll.imageFile;

//pulling selections
let selectGlaze;
let selectPack;

window.onload = function selectOption() {
    selectGlaze = document.querySelector('#glazing');
    selectPack = document.querySelector('#pack');
    
    for (i = 0; i < glazingOptions.length; i++)
    {
        const glazingPrice = glazingOptions[i];
        const option = document.createElement('option');
        option.textContent = glazingPrice.name;
        selectGlaze.appendChild(option);
    }
    
    for (i = 0; i < packSizeOptions.length; i++)
    {
        const packSize = packSizeOptions[i];
        const option = document.createElement('option');
        option.textContent = packSize.name;
        selectPack.appendChild(option);
    }
}

//updating price
function updatePrice() {   
    let price = ((currentRoll.basePrice + glazingPrice) * packSize).toFixed(2);
    let newPrice =  document.querySelector('#price');
    newPrice.innerText = "$" + price;
}

//reflecting new prices as selections change
function glazingChange(selectGlaze) {
    glazingPrice = glazingOptions.find(glaze => glaze.name === selectGlaze.value).priceAdaptation;
    updatePrice();
}

function packChange(selectPack) {
    packSize = packSizeOptions.find(pack => pack.name === selectPack.value).multiplier;
    updatePrice();
}

//adding to Cart
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

const cartButton = document.querySelector('#add');
cartButton.addEventListener('click', () => { addToCart(currentRoll) });

function addToCart(currentRoll) {
    const newRoll = new Roll(currentRoll.type, currentRoll.glazing, currentRoll.size, currentRoll.price)
    cart.push(newRoll);
    saveToLocalStorage();
    return cart;
}