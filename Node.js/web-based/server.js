const http = require("http");

const server = http.createServer((req, res) => {
    let date = new Date();

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.write("<h1>Current Date and Time</h1>");
    res.write("<p>Date: " + date.toLocaleDateString() + "</p>");
    res.write("<p>Time: " + date.toLocaleTimeString() + "</p>");

    res.end();
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});