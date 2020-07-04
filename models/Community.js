const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
content: { type: String, required: true },
user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const communitySchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  text: { type: String },
  lng: { type: Number },
  lat: { type: Number },
  address: { type: String },
  website: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ]
}, {
  timestamps: true
})

module.exports = mongoose.model('Community', communitySchema)