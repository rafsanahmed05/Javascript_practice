let cart = [
    { name: "shirt", price: 1200, quantity: 2 },
    { name: "pants", price: 1800, quantity: 1 },
    { name: "shoes", price: 150, quantity: 3 }
];

let totalprice = 0;
let totalquantity = 0;

for (const item of cart) {
    totalprice += item.price * item.quantity;
    totalquantity += item.quantity;
}

console.log("Total Price: " + totalprice);
console.log("Total Quantity: " + totalquantity);