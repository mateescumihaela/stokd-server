const mongoose = require('mongoose')
const RegionNorth = require('../models/RegionNorth')
const RegionSouth = require('../models/RegionSouth')
const RegionEast = require('../models/RegionEast')
const User = require('../models/User')
const regionNorthData = require('./data/regionNorthData')
const regionSouthData = require('./data/regionSouthData')
const regionEastData = require('./data/regionEastData')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    User.create([{
      username: 'mihaela',
      email: 'test@gmail.com',
      password: 'test',
      passwordConfirmation: 'test'
    }])
      .then(users => {
        console.log(`${users.length} user created`)
        return RegionNorth.create(regionNorthData(users))
      })
      .then(regionNorth => console.log(`${regionNorth.length} item created`)) 
      .catch(err => console.log(err))
      .then(() => {
        return User.find({
          username: 'mihaela'
        })
      })     
      .then((users) => {
        // console.log(users[0])
        return RegionSouth.create(regionSouthData(users))
      })
      .then(regionSouth => console.log(`${regionSouth.length} item created`))
      .catch(err => console.log(err))
      .then(() => {
        return User.find({
          username: 'mihaela'
        })
      })
      .then((users) => {
        return RegionEast.create(regionEastData(users))
      })
      .then(regionEast => {
        console.log(`${regionEast.length} item created`)
      })  
      .finally(() => mongoose.connection.close())
  }
  
)  