const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const socket = require('socket.io')

  
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 3000;

app.get('/getPort', function (req, res) {
    console.log('port : ' + port);
  res.send('port : ' + port)
})


const server = app.listen(port)

const io = socket(server, {
    cors: {origin : '*'}
  });

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('save', (message) => {
    console.log(message);
    io.emit('res', `${socket.id.substr(0, 2)} said ${message}`);
  });

  socket.on('disconnect', () => {
    console.log('a user disconnected!');
  });
});