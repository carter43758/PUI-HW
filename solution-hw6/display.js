
//getting current roll
let queryString = window.location.search;
let params = new URLSearchParams(queryString);
let rollType = params.get('roll');
let currentRoll = rolls[rollType];

//PDP Data
const rollName = document.querySelector('#top1');    
const rollPrice = document.querySelector('#price');
const rollImage = document.querySelector('#original2');
const selectGlaze = document.querySelector('#glazing');
const selectPack = document.querySelector('#pack');

//updating text, price, & image
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
    let newPrice = ((currentRoll.basePrice + glazingPrice) * packPrice);
    rollPrice.innerText = "$" + newPrice.toFixed(2);
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
const cartButton = document.querySelector('#add');
cartButton.addEventListener('click', () => { addToCart(currentRoll) });

function addToCart(currentRoll) {
    let newRoll = new Roll(currentRoll.name, selectGlaze.value, selectPack.value, currentRoll.basePrice);
    cart.push(newRoll);
}