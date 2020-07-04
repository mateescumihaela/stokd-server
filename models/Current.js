const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
})

const currentSchema = new mongoose.Schema({
  title: { type: String },
  image: { type: String },
  text: { type: String },
  author: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  comments: [ commentSchema ],
  url: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('Current', currentSchema)