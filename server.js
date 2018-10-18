const express = require('express')
const app = express()
const routes = require('./routes/main')

// Creating TCP Socket connection
const socket = require('./socket/socket')

// Retrieve App Routes
routes(app, socket)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})