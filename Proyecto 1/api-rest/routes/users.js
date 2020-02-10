const express = require('express')
const router = express.Router()
const User = require('../Models/user')
const bcrypt = require('bcrypt')

router.post('/signup', (req, res, next) => {
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

router.post('/login', (req, res, next) => {
    // User.findOne({ email: req.body.email }, (err, user) => {
    //     if (err) return res.status(500).json({
    //       title: 'server error',
    //       error: err
    //     })
    //     if (!user) {
    //       return res.status(401).json({
    //         title: 'user not found',
    //         error: 'invalid credentials'
    //       })
    //     }
    //     //incorrect password
    //     if (!bcrypt.compareSync(req.body.password, user.password)) {
    //       return res.status(401).json({
    //         tite: 'login failed',
    //         error: 'invalid credentials'
    //       })
    //     }
    //     //IF ALL IS GOOD create a token and send to frontend
    //     let token = jwt.sign({ userId: user._id}, 'secretkey');
    //     return res.status(200).json({
    //       title: 'login sucess',
    //       token: token
    //     })
    //   })
})

module.exports = router