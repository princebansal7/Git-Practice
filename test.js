console.log("Prince Bansal");

sum = (a, b) => a + b;
ans = sum(6, 9);
console.log("sum is:", ans);

subtract = (a, b) => a - b;
ans = subtract(6, 9);
console.log("subtraction is:", ans);

modulo = (a, b) => a % b;
ans = modulo(6, 9);
console.log("remainder is:", ans);

multiplication = (a, b) => a * b;
ans = multiplication(6, 9);
console.log("multiplication is:", ans);

function division(a, b) {
    if (b == 0) {
        console.log("CAN'T DIVIDE BY 0");
        return "NULL";
    } else return a / b;
}
console.log("division is:", division(6, 9));
console.log("division is:", division(6, 0));

function sub(a, b) {
    return a - b;
}
console.log("2: subtraction is:", sub(6, 9));

function mod(a, b) {
    return a % b;
}
console.log("2: modulo is:", mod(6, 9));

function add(a, b) {
    return a + b;
}
console.log("2: addition is:", add(6, 9));
