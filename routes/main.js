// MAIN ROUTES FILE
const routes = function(app, socket) {

    // Default example route
    app.get('/', (req, res) => {
        res.render('index');
    });
    
    // Dummy TCP communication
    app.get('/communicate', (req, res) => {
        // Write data through the socket
        socket.write('Hi from /communicate route!\r\n',
            // Send http response when finished writing to socket
            () => {
                res.render('message')
            })
    })
}
// Exporting module
module.exports = routes