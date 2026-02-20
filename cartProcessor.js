import { getTaxRate } from 'fake-tax-module';

function process_Cart(cartItems) {
    var total = 0;
    for (let i = 0; i < cartItems.length; i++) {
    total += cartItems[i].price;
    }

    if (total > 100 {
        total = total + 20;
    }

    return total;
}

function main() {
    let myCart = "shirt";
    myCart.push({ name: "pants", price: 50 });

    let finalPrice = process_Cart(myCart);
    console.log("Final price: " finalPrice);
}

main();