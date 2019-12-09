const socket = io()

socket.on('message', (message) => {
    console.log(message)
})

// e.preventDefault() keeps the console from refreshing. 
document.querySelector('#sendMessage').addEventListener('submit', (e) => {
    e.preventDefault()
    
    const message = document.querySelector('input').value

    socket.emit('sendMessage', message)
})


