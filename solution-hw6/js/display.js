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

let glazingPrice = 0; 
let packSize = 0;
let selectGlaze = 0;
let selectPack = 0;

//pulling selections
window.onload = function selectOption() {
    const selectGlaze = document.querySelector('#glazing');
    const selectPack = document.querySelector('#pack');
    
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
    const basePrice = 2.49;
    let price = ((basePrice + glazingPrice) * packSize).toFixed(2);
    let newPrice =  document.querySelector('#price');
    newPrice.innerText = "$" + price;
}

//https://stackoverflow.com/questions/45522616/how-to-use-indexof-with-filter-in-javascript

//reflecting new price
function glazingChange(selectGlaze) {
    glazingPrice = glazingOptions.find(glaze => glaze.name === selectGlaze.value).priceAdaptation;
    updatePrice();
}

//got this from Office Hours
function packChange(selectPack) {
    packSize = packSizeOptions.find(pack => pack.name === selectPack.value).multiplier;
    updatePrice();
}