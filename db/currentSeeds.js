const mongoose = require('mongoose')
const Current = require('../models/Current')
const currentData = require('./data/currentData')
const { dbURI, port } = require('../config/environment')


mongoose.connect(
  'mongodb://heroku_8xjr7v94:pu27vtrpqrq6642ieemjr3bicg@ds123346.mlab.com:23346/heroku_8xjr7v94',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)    
    Current.create(currentData)
      .then(current => console.log(`${current.length} Article Created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)


