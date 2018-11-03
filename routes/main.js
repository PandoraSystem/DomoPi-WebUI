/**
 * routes/main.js
 * Main routes file
 * Defines express generic top level routes
 */

const express = require('express')
const router = express.Router()

module.exports = function(socket) {
    // LOGGED IN MIDDLEWARE
    // Check if user is authenticated:
    // it lets the user go on to the desired page if he is authenticated,
    // otherwise it redirects to the login page
    // TODO: FLASH MESSAGE
    const loggedIn = (req, res, next) => {
        if (req.isAuthenticated()) {
            next()
        } else {
            res.redirect('/login')
        }

    }

    // DEFAULT HOMEPAGE (DASHBOARD) route
    router.get('/', loggedIn, (req, res) => {
        res.render('index');
    });

    // LOGIN route
    router.get('/login', (req, res, next) => {
        res.render('login', {
            layout: 'generic'
        });
    });

    // REGISTRATION FORM route
    router.get('/signup', (req, res, next) => {
        res.render('signup', {
            layout: 'generic'
        });
    });

    // [DUMMY] USER PROFILE route
    router.get('/profile', loggedIn, (req, res, next) => {
        res.send(req.session)
    });

    // LOG OUT route
    // TODO: FLASH MESSAGE
    router.get('/logout', (req, res) => {
        req.logout()
        res.redirect('/login')
    })

    // [DUMMY] DEVICES route
    router.get('/devices', (req, res) => {

        var dev1 = {
            name: 'Lampadina soggiorno',
            description: 'Lampadina vicino alla porta',
            status: 1
        }
        var dev2 = {
            name: 'Lampadina Camera',
            description: 'Lampadario in camera',
            status: 0
        }
        const dummyDevices = [dev1, dev2]

        res.render('devices', {
            devices: dummyDevices
        })
    })

    // Dummy TCP communication
    router.get('/communicate', (req, res) => {
        // Write data through the socket
        socket.write('Hi from /communicate route!\r\n',
            // Send http response when finished writing to socket
            () => {
                res.render('message')
            })
    })

    return router
}
