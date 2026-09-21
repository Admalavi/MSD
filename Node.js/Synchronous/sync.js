const fs = require("fs");

console.log("Start");

let data = fs.readFileSync("input.txt", "utf8");

console.log(data);

console.log("End");