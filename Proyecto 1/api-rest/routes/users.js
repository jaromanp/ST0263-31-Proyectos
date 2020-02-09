const express = require('express')
const router = express.Router()
const User = require('../Models/user')
const bcrypt = require('bcrypt')

router.post('/signup', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        userID: req.body.userID,
        Name: req.body.Name,
        password: bcrypt.hashSync(req.body.password, 10)
    })
    newUser.save()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json({message: err})
        })
})

router.get('/register', (req, res) => res.send('register'))

module.exports = router