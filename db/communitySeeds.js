const mongoose = require('mongoose')
const Community = require('../models/Community')
const communityData = require('./data/CommunityData')


mongoose.connect(
  'mongodb://localhost/stokd-server',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {
    if (err) return console.log(err)
    Community.create(communityData)  
      .then(community => console.log(`${community.length} Item Created`))
      .catch(err => console.log(err))
      .finally(() => mongoose.connection.close())
  }
)