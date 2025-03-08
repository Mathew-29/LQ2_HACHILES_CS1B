let item_choice = prompt("Enter the item choice (A, B, C, D, E):");
let quantity = parseInt(prompt("Enter the quantity to be ordered:"));
let tot_price;

if (item_choice === 'A') {
    tot_price = 20 * quantity;
} else if (item_choice === 'B') {
    tot_price = 25 * quantity;
} else if (item_choice === 'C') {
    tot_price = 100 * quantity;
} else if (item_choice === 'D') {
    tot_price = 90 * quantity;
} else if (item_choice === 'E') {
    tot_price = 150 * quantity;
} else {
    alert("No matching Item! Try to re-run the program");
}

if (tot_price !== undefined) {
    alert("The Total Price of the order: " + tot_price);
}
