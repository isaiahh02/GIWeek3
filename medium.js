let sharePizza = function cutPizzaSlices(no) {
    let pizzaSlices = 8;
    let totalSlices = pizzaSlices/no;
    totalSlices = totalSlices.toFixed(2);
    let text = "Each person gets " + totalSlices + " slices of pizza";
    return text
}
console.log(sharePizza(2));
console.log(sharePizza(3));