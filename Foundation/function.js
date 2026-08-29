function total( price = 12, quantity = 20) {
    const grandtotal = price * quantity;
    return grandtotal;
}
const spend = total(20);
const save = 200-spend;
console.log(spend,save);