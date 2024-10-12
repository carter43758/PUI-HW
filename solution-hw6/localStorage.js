//HW6
function saveToLocalStorage() {
    const rollArray = Array.from(cart);
    const rollArrayString = JSON.stringify(rollArray);

    localStorage.setItem('storedItems', rollArrayString);
    console.log(cart);
}

if (localStorage.getItem('storedItems') != null) {
    retrieveFromLocalStorage();
}

function retrieveFromLocalStorage() {
    const rollArrayString = localStorage.getItem('storedItems');
    const rollArray = JSON.parse(rollArrayString);
    cart = new Array(rollArray);
}