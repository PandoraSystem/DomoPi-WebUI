const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const exphbs = require('express-handlebars')
const routes = require('./routes/main')
const app = express()

// Connect to MongoDB with Mongoose (TODO: parameters in config file)
mongoose.connect('mongodb://localhost:27017/domopi', { useNewUrlParser: true })

// Registering Handlebars as default view engine
app.engine('hbs', exphbs({
	// Handlebars configuration
	extname: '.hbs',
	layoutsDir: path.join(__dirname,'./views/layouts'),
	defaultLayout: 'main',
	partialsDir: path.join(__dirname,'./views/partials/')
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