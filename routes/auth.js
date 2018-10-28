/**
 * routes/auth.js
 * Authentication routes file
 * Defines express logic used for registration and login
 */

const express = require('express')
const router = express.Router()
const User = require('../models/User')

module.exports = function(passport) {
    // REGISTRATION LOGIC route
    router.post('/signup', (req, res) => {
        const username = req.body.username
        const password = req.body.password
        const confPassword = req.body.confirmPassword

        // Look for posted username into database
        User.findOne({ username: username }, (err, foundUser) => {
            // If any error occurs respond with a 500 error status
            if (err) { res.status(500).send('error occured') } else {
                // If that username is found in database throw an error
                // (we cannot register another user with that username)
                if (foundUser) {
                    res.status(500).send('username already exists')
                } else {
                    // If posted passwords don't match request
                    // the user to try again
                    if (password !== confPassword) {
                        res.send('Sorry, passwords don\'t match!\nPlease try again')
                    } else {
                        // Create new User based on Mongoose model
                        // set up user username and encrypt its password
                        const user = new User()
                        user.username = username
                        user.password = user.hashPassword(password)
                        // Save user in database
                        user.save((err, userSaved) => {
                            // If any error occurs respond with a status 500 error
                            // otherwise send that user back as response
                            if (err) {
                                res.status(500).send()
                            } else {
                                res.send(user)
                            }
                        })
                    }

                }
            }

        })
    });

    // AUTHENTICATION LOGIC route
    // Use Passport.js "authenticate" middleware to login the user 
    // Redirect to different routes based of authentication result
    router.post('/login', passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/'   
    }), function(req, res) {
        console.log('logged in')
    })

    return router
}