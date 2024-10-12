//HW6
function saveToLocalStorage() {
    const rollArrayString = JSON.stringify(cart);
    localStorage.setItem('storedItems', rollArrayString);
    console.log(cart);
}

if (localStorage.getItem('storedItems') != null) {
    retrieveFromLocalStorage();
}

function retrieveFromLocalStorage() {
    const rollArrayString = localStorage.getItem('storedItems');
    const rollArray = JSON.parse(rollArrayString);
    cart = rollArray;