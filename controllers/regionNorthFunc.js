const RegionNorth = require('../models/RegionNorth')


// GET all 
function index(req, res) {
  RegionNorth
    .find()
    .populate('user')
    .then(regionsNorth => res.status(200).json(regionsNorth))
    .catch(err => console.log(err))
}


//GET single 
function show (req, res) {
  RegionNorth
    .findById(req.params.id)
    .then(regionNorth => {
      if (!regionNorth) res.status(404).json({ message: ' Region Not Found' })
      else res.status(200).json(regionNorth)
    })
    .catch(err => console.log(err))
}


//POST comment
function createComment(req, res) {
  req.body.user = req.currentUser
  RegionNorth
    .findById(req.params.id)
    .populate('comment.user')
    .then(regionNorth => {
      if (!regionNorth) return res.status(404).json({ message: 'Region Not Found' })
      
      regionNorth.comments.push(req.body)
      
      res.status(201).json(regionNorth.comments)
      return regionNorth.save()
    })
    .catch(err => console.log(err))
}


//DELETE comment
function removeComment(req, res) {
  RegionNorth
    .findById(req.params.id)
    .then(regionNorth => {
      if (!regionNorth) return res.status(404).json({ message: 'Region Not Found' })
      
      const commentById = regionNorth.comments.id(req.params.commentId)
      commentById.remove()
      return regionNorth.save()
    })
    .then(regionNorth =>  RegionNorth.populate(regionNorth, 'user comments.user'))
    .then(regionNorth => res.json(regionNorth))
    .catch(err => console.log(err))
}



module.exports = {
  index,
  show,
  createComment,
  removeComment
}