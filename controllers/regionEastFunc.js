const RegionEast = require('../models/RegionEast')


// GET all 
function index(req, res) {
  RegionEast
    .find()
    .populate('user')
    .then(regionsEast => res.status(200).json(regionsEast))
    .catch(err => console.log(err))
}


// GET single 
function show(req, res) {
  RegionEast
    .findById(req.params.id)
    .then(regionEast => {
      if (!regionEast) res.status(404).json({ message: ' Region Not Found' })
      else res.status(200).json(regionEast)
    })
    .catch(err => console.log(err))
}


// POST comment
function createComment(req, res) {
  req.body.user = req.currentUser
  RegionEast
    .findById(req.params.id)
    .populate('comment.user')
    .then(regionEast => {
      if (!regionEast) return res.status(404).json({ message: 'Region Not Found' })
      
      regionEast.comments.push(req.body)
      
      res.status(201).json(regionEast.comments)
      return regionEast.save()
    })
    .catch(err => console.log(err))
}


// DELETE comment
function removeComment(req, res) {
  req.body.user = req.currentUser
  RegionEast
    .findById(req.params.id)
    .then(regionEast => {
      if (!regionEast) return res.status(404).json({ message: 'Region Not Found' })
      const commentById = regionEast.comments.id(req.params.commentId)
      commentById.remove()
      return regionEast.save()
    })
    .then(regionEast =>  RegionEast.populate(regionEast, 'user comments.user'))
    .then(regionEast => res.json(regionEast))
    .catch(err => console.log(err))
}



module.exports = {
  index,
  show,
  createComment,
  removeComment
}