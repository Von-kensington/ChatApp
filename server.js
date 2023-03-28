const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server);

app.get('/', (req,res) =>{
    res.sendFile(__dirname + "/index.html");
})

app.use(express.static(__dirname));
let messages = [];
io.on('connection', (socket) => {
    if(messages.length > 0){
        messages.forEach(msg =>
            {
                socket.emit("new message", msg);
            });
    }
    socket.on("Send chat message", (text, name) => {
        msgObj = {text: text, name: name}
        io.emit("new message", msgObj);
        messages.push(msgObj);
    });

});

server.listen(3000, () => console.log("Listening on port 3000"));