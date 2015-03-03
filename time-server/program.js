var net = require('net');
var strftime = require('strftime');
var port = process.argv[2];

function now() {
    return strftime('%Y-%m-%d %H:%M')
}

var server = net.createServer(function (socket) {
    socket.end(now());
})

server.listen(Number(port));
