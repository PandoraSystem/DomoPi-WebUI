/**
 *  server.js
 *  Main application file
 */

const express = require('express')
const path = require('path');
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const exphbs = require('express-handlebars')

// Initialize Express
const app = express()

// Connect to MongoDB with Mongoose (TODO: parameters in config file)
mongoose.connect('mongodb://localhost:27017/domopi', { useNewUrlParser: true },
	(err) => { if (err) {
		console.log('ERROR: Failed to connect MongoDB\nExiting...\n')
		process.exit(1)
	}}
)

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

/*** SETTING UP MIDDLEWARES ***/
// Body and Cookie Parser to parse
// form and cookie data into req object
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Declaring "public" folder as static folder
app.use(express.static(path.join(__dirname,'./public')))

// Require Passport local authentication strategy
require('./passport')(passport)

// Initialize express session
app.use(session({
	secret: 'YouWouldLikeToKnowUh',
	saveUninitialized: false,
	resave: false
}))

// Initialize Passport
app.use(passport.initialize())
app.use(passport.session())

// Creating TCP Socket connection with DomoPi Core
const socket = require('./socket/socket')

// Routes
app.use('/', require('./routes/main')(socket))
app.use('/', require('./routes/auth')(passport))

// Boooom!!!
app.listen(3000, function () {
  console.log('Awesome DomoPi WebApp listening on port 3000!')
})
