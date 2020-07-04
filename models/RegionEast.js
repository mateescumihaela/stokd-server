const mongoose = require('mongoose')


const regionEastSchema = new mongoose.Schema({
  spot: { type: String },
  level: { type: String },
  image: { type: String },
  crowd: { type: String},
  description: { type: String },
  lng: { type: Number },
  lat: { type: Number },
  rating: { type: String },
  comments: [ commentSchema ],
  user: { type: mongoose.Schema.ObjectId, ref: 'User', require: true }
}, {
  timestamps: true
})

module.exports = mongoose.model('RegionEast', regionEastSchema)