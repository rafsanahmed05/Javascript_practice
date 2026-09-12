// we'll build a order processing system to understand dry and how important a function is.

function isValidPrice(price) {
    return typeof price === "number" && price > 0;
}

function calculateTotal(price, quantity) {
    return price * quantity;
}

function calculateDiscount(total, discountPercent) {
    return total - (total * discountPercent / 100);
}

function processOrder(product, price, quantity, discountPercent) {
    if (!isValidPrice(price)) {
        return "Invalid price";
    }

    if (typeof quantity !== "number" || quantity <= 0) {
        return "Invalid quantity";
    }

    const total = calculateTotal(price, quantity);
    const finalPrice = calculateDiscount(total, discountPercent);

    return {
        product: product,
        price: price,
        quantity: quantity,
        total: total,
        discountPercent: discountPercent,
        finalPrice: finalPrice
    };
}

const order1 = processOrder("Laptop", 50000, 2, 10);

console.log(order1);