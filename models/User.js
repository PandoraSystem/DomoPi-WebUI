/**
 * models/Users.js
 * "Users" Model
 * Defines mongoose schema for "Users"
 */

const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')

// Defining the schema for "Users"
const schema = mongoose.Schema
const userSchema = new schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		require: true
	}
})

/*** DEFINING USER SCHEMA METHODS ***/
// Hash password method:
// Encrypt password using bcrypt
// (used for registrations)
userSchema.methods.hashPassword = (password) => {
	return bcrypt.hashSync(password,bcrypt.genSaltSync(10))
}
// Compare Password method:
// Let check if current password matches with previously hashed password
// (used for logins)
userSchema.methods.comparePassword = (password, hash) => {
	return bcrypt.compareSync(password,hash)
}
module.exports = mongoose.model('user', userSchema, 'users')