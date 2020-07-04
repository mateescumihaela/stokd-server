const User = require('../models/User')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')

function register(req, res) {
  User
    .create(req.body)
    // send a welcome message with users username embedded
    .then(user => res.status(200).json({ message: `Hello ${user.username}, thank you for registering` })) 
    .catch(err => {
      console.log(err)
      res.status(200).json({ message: 'Problem registering account', error: err.message })
    })
}

// login route
// 1. user supplies email and password in body of request
function login(req, res) {
  User
    .findOne({ email: req.body.email }) //find the user by that email
    // 2. check if there's a record and the password provided matches what's in the database
    .then(user => {
      if (!user || !user.validatePassword(req.body.password)) {
        // 3. send a response of unauthorised and end there
        return res.status(401).json({ message: 'Unauthorized' })
      }
      const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '12h' }) // if all good, create a JSON web token (jwt), baking in the user id, a secret to encode/decode and an expiry time for the token
      // 4. send back a message with that created token
      res.status(202).json({ message: `Welcome Back ${user.username}`, token, user })
    }) 
    .catch(() => res.status(401).json({ message: 'Unauthorized' } ))
}


// find user liked articles
function retrieveLikes(req, res) {
  User
    .findOne({ _id: req.params.userId })
    .then(user => {
      if (!user) res.status(404).json({ message: 'User Not Found' })
      return res.status(200).json(user)
    })
    .catch(err => console.log(err))
}

// PUT user liked articles
function updateLikes(req, res) {
  req.body.user = req.currentUser
  User
    .findOne({ _id: req.params.userId })
    .then(user => {
      if (!user) res.status(404).json({ message: 'User Not Found' })
      user.likes.push(req.body)
      
      res.status(201).json(user)
      return user.save()
    })
    
    .catch(err => console.log(err))
}


module.exports = {
  register,
  login,
  retrieveLikes,
  updateLikes
}