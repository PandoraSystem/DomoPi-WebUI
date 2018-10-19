const express = require('express')
var path = require('path');
const exphbs = require('express-handlebars')
const routes = require('./routes/main')
const app = express()

// Declaring "public" folder as static folder
app.use(express.static('./public'))

// Registering Handlebars as default view engine
app.engine('hbs', exphbs({
	// Handlebars configuration
	extname: '.hbs',
	layoutsDir: path.join(__dirname,'./views/layouts'),
	defaultLayout: 'main'
}))
app.set('view engine', 'hbs')

// Registering "views" folder
app.set('views', path.join(__dirname,'./views'));  

// Creating TCP Socket connection
const socket = require('./socket/socket')

// Retrieve App Routes
routes(app, socket)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})