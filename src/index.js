const path = require('path')
const express = require('express')

const app = express()

port = process.env.PORT || 3000

//To join files, use path.join with 2 arguments: __dirname, and directory you want to join
const publicDirectoryPath = path.join(__dirname, '../public')

//express.static middleware serves up contents of the file 
app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log('Server is up on ' + port)
})


