const http = require("http")
//create server, send a response, then retrieve it
// const server = http.createServer((req,res) => {
//     res.end("Hello World")
// })


// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain")
//     res.end("What's up Deb????")
// })

// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/html")
//     res.write("<h1>Hello Per Scholas</h1>")
//     res.write("<p>I wonder what else I can send????</p>")
//     res.end("What's up Deb????")
// })

const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write("<html><body><p>Home Page</p></body></html>")
        res.end()
    }else if(req.url === "/student"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write("<html><body><p>Student Page</p></body></html>")
        res.end()
    }else if(req.url === "/admin"){
        res.writeHead(200, {
            "Content-Type": "text/html"
        })
        res.write("<html><body><p>Admin Page</p></body></html>")
        res.end()
    }else{
        res.end("Invalid Request")
    }
})
server.listen(3000)
console.log("Server listening on Port 3000")