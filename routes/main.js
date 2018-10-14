const net = require('net')

// MAIN ROUTES FILE
const routes = function(app) {

    // Default example route
    app.get('/', (req, res) => {

        res.send('Hello World!');
    });
    // Dummy TCP communication
    app.get('/communicate', (req, res) => {

    	// Create TCP Connection client
        const client = net.createConnection(
        	{ 	
        		port: 9000,
        		host: 'localhost'
        	},
        	() => {
	            // 'connect' listener
	            console.log('connected to server!')
	            client.write('Hi from NodeJs!\r\n')
       		})

        // Listen for incoming data and log it to console
        client.on('data',
    		(data) => {
	            console.log(data.toString())
	            //client.end()
    		})

        // Notifiy connection closing to console
        client.on('end',
        	() => {
            	console.log('disconnected from server')
        	})

        res.send('OK: Message sent');
    })
}
// Exporting module
module.exports = routes