

function processCart(cartItems) {
    var total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price;
    }

    if (total > 100 ) {
        total = total + 20;
    }

    return total;
}

function main() {
    let myCart = [];
    myCart.push({ name: "pants", price: 50 });

    let finalPrice = processCart(myCart);
    console.log("Final price: " + String(finalPrice));
}

main();