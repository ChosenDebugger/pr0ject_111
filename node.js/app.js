/*
var app = require('http').createServer(handler);
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(3000);

function handler(req, res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if (err) {
                res.writeHead(500);
                return res.end('Error loading index.html');
            }

            res.writeHead(200);
            res.end(data);
        });
}
*/

var io = require('socket.io').listen(3000);
console.log("Server on port 3000");

io.on('connection', function (socket) {
    console.log("one player in");

    socket.send('Hello Cocos2d-x');
    socket.on('message', function (data) {
        console.log(data);
    });
    socket.on('callServerEvent', function (data) {
        console.log(data);
        socket.emit('callClientEvent', { message: 'Hello Client.' });
    });
    socket.on('disconnect', function () {
        console.log("one player disconnect");
    })
});



