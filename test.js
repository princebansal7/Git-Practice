console.log("Prince Bansal");

sum = (a, b) => a + b;
ans = sum(6, 9);
console.log("sum is:", ans);

sum = (a, b) => a - b;
ans = sum(6, 9);
console.log("subtraction is:", ans);

sum = (a, b) => a % b;
ans = sum(6, 9);
console.log("remainder is:", ans);

sum = (a, b) => a * b;
ans = sum(6, 9);
console.log("multiplication is:", ans);

function div(a, b) {
    if (b == 0) {
        console.log("CAN'T DIVIDE BY 0");
        return "NULL";
    } else return a / b;
}
console.log("division is:", div(6, 9));
console.log("division is:", div(6, 0));
