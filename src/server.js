const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('run yarn test in the terminal!');
});

const listener = server.listen(process.env.PORT, () => { /* ... */ });
