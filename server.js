const express = require('express')
const routes = require('./routes/main')
const app = express()

// Declaring "public" folder as static folder
app.use(express.static('./public'))

// Creating TCP Socket connection
const socket = require('./socket/socket')

// Retrieve App Routes
routes(app, socket)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})