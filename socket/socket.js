const net = require('net')

// Create TCP Socket
const socket = net.createConnection({
		port:9000,
		host:'localhost'
	}, 
	() => {
	    // 'connect' listener
	    console.log('connected to server!')
	    socket.write('Hi from NodeJs main file!\r\n')
	}
)

// Listenfor incoming data and log it to console
socket.on('data', (data) => console.log(data.toString()))

// Notifiy connection closing to console
socket.on('end', () => {
	socket.end()
	console.log('disconnected from server')
})

module.exports = socket