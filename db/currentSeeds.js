const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Current = require('../models/Current')
const currentData = require('./data/currentData')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)    
    Current.create(currentData)
      .then(current => console.log(`${current.length} Article Created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)