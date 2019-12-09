const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

// express.static middleware serves up contents of the file 
app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    socket.emit('message', 'Welcome user!')

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })
})

server.listen(port, () => {
    console.log(`Server is up on ${port}!`)
})


