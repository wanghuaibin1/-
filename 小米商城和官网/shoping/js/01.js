const http = require('http')

const server = http.createServer()

server.on('request', function (req, res) {
    console.log('Someone visit our web server');
    let f= window.location.href = "../index.html"
    res.end(url='../index.html')
})
server.listen(80, function () {
    console.log('server running at http:127.0.0.1:8080');
})