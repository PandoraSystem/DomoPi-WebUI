/**
 * passport.js
 * Passport.js configuration
 * Defines strategies used for authentication
 * (currently only local strategy is used - passport-local)
 */

const localStrategy = require('passport-local').Strategy
const User = require('./models/User')

module.exports = function(passport) {
	// SERIALIZE method
	// Serialize user into session
	passport.serializeUser((user, done) => {
		done(null, user)
	})

	// DESERIALIZE method
	// Deserialize user from session
	passport.deserializeUser((user, done) => {
		done(null, user)
	})

	// LOCAL STRATEGY configuration
	passport.use(new localStrategy(function(username, password, done) {
		// Look for wanted user into database
		User.findOne({username:username}, (err, userFound) => {
			// If any error occurs respond with error info
			if (err) { done(err) }
			else {
				// If the user is found in database check for password match,
				// if posted password match the one in db call "done" callback 
				// function setting up user info (thus validating authentication)
				// OTHERWISE, If user is not found or passwords don't match call
				// "done" callback function without setting up user info
				// (thus resulting in failed authentication)
				if (userFound) {
					var validPassMatch = userFound
						.comparePassword(password,userFound.password)
					if (validPassMatch) {
						done(null, {
							username: userFound.username,
							password: userFound.password
						})
					} else {
						done(null,false)
					}
				} else {
					done(null,false)
				}
			}
		})
	}))
}