const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", (a) => {
    rl.question("Enter second number: ", (b) => {
        rl.question("Enter operator (+, -, *, /): ", (operator) => {

            a = Number(a);
            b = Number(b);

            let result;

            if (operator === "+") {
                result = a + b;
            }
            else if (operator === "-") {
                result = a - b;
            }
            else if (operator === "*") {
                result = a * b;
            }
            else if (operator === "/") {
                result = a / b;
            }
            else {
                result = "Invalid operator";
            }

            console.log("Result =", result);

            rl.close();
        });
    });
});