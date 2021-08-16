const costOfMars = 2000;
const costOfMoon = 1000;

function updateQuantity(planet, change) {
    let quantity = parseInt(document.getElementById(planet + "-input").value);
    // console.log(quantity);
    quantity += change;
    if (quantity < 0) {
        return;
    }
    document.getElementById(planet + "-input").value = quantity;
    updateCost(planet, quantity);
    updateTotalCost();
}

function updateCost(planet, quantity) {
    let cost = 0;
    if (planet == "mars") {
        cost = costOfMars * quantity;
    } else {
        cost = costOfMoon * quantity;
    }
    document.getElementById(planet + "-cost").innerText = cost;
}

function updateTotalCost() {
    const marsTotal = parseInt(document.getElementById("mars-cost").innerText);
    const moonTotal = parseInt(document.getElementById("moon-cost").innerText);
    document.getElementById("total").innerText = marsTotal + moonTotal;
}
