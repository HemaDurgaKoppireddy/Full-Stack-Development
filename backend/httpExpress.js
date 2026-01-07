import http from 'http';
const server = http.createServer((req, res) => {
    console.log(req.method);
    if(req.url === "/user") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({name: "FSD"}))
    }
    else if(req.url === "/profile") {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({name: "Hema", Age: "20", Location: "India"}))
    }
    else {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end("Hello this is from backend");
    }
});

const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})