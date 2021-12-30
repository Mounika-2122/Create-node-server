//simply creating a server
const fs = require('fs')
const http = require('http');
const server = http.createServer((req,res) => {
 res.end('Message from the server : Good afternoon cgcs online class started on nov 24th based on full stack developer');
});

server.listen(3500 , '127.0.0.1', () => {
    console.log('Listening to requests')
});
