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

io.on('connection', function (socket) {

    socket.on('join game', function () {
        console.log("One player join in");
    });


    /*
    console.log("6666");
    //send to user
    socket.send('Hello Cocos2d-x');
    //login message
    socket.on('message', function (data) {
        console.log(data);
    });
    */
    socket.on('callServerEvent', function (data) {
        console.log(data);
        scoket.emit('callClientEvent', { message: 'Hello Clinet.' });
    });
});


