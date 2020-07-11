const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Clothing = require('../models/Clothing')
const User = require('../models/User')
const clothingData = require('./data/clothingData')
// const userData = require('./data/userData.js')
mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err, db) => {
    if (err) return console.log(err)
    db.dropDatabase()
      .then(() => {
        return User.create([{
          username: 'mihaela',
          email: 'test@gmail.com',
          password: 'test',
          passwordConfirmation: 'test'
        }])
      })  
      .then(users => {
        console.log(`${users.length} Clothing User Created`)
        return Clothing.create(clothingData(users))
      })
      .then(clothing => console.log(`${clothing.length} Item Created`))     
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)