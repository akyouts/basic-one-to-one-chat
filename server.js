const express = require('express');
const app = express();
const socketio= require('socket.io')

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(8000,()=>{
    console.log("Server is running on port 8000");
})

const io = socketio(expressServer);

io.on('connection',(socket)=>{
    socket.emit('dataFromServer',{data:"This message is comming from Server API"});
    socket.on('dataFromCient',(data)=>{
        console.log(data);
    });

    socket.on('messageFromCliet',(data)=>{
        console.log(data);
        io.emit('messageFromServer',{text:data.text});
        
    })
})


