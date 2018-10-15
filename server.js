var express = require('express')
var app = express()
var routes = require('./routes/main')
var net = require('net')

// Create TCP Socket
const socket = net.createConnection({
	port:9000,
	host:'localhost'
}, () => {
    // 'connect' listener
    console.log('connected to server!')
    socket.write('Hi from NodeJs main file!\r\n')
})

// Listen for incoming data and log it to console
socket.on('data',
	(data) => {
        console.log(data.toString())
	}
)

// Notifiy connection closing to console
socket.on('end',
	() => {
    	console.log('disconnected from server')
	}
)

// Retrieve App Routes
routes(app, socket)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})