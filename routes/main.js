// MAIN ROUTES FILE
const routes = function(app, socket) {

    // Default example route
    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    
    // Dummy TCP communication
    app.get('/communicate', (req, res) => {
        // Write data through the socket
        socket.write('Hi from /communitcate route!\r\n',
            // Send http response when finished writing to socket
            () => {
                res.send('OK: Message sent')
            })
    })
}
// Exporting module
module.exports = routes