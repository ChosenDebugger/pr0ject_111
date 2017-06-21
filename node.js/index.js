/*var app = require('express')();
var http = require('http').Server(app);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});*/


var app = require('express')();
var http =require('http').Server(app);
var io =require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('chat message', function (msg) {
        console.log('message: ' + msg);
    });

    socket.on('chat message1', function (msg) {
        io.emit('chat message1', msg);
    });

    socket.on('disconnect', function () {
        console.log('naive user disconnected');
    });
});



http.listen(3000, function () {
    console.log('listening on *:3000');
});

