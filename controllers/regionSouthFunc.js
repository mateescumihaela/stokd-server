const RegionSouth = require('../models/RegionSouth')


// GET all 
function index(req, res) {
  RegionSouth
    .find()
    .populate('user')
    .then(regionsSouth => res.status(200).json(regionsSouth))
    .catch(err => console.log(err))
}


//GET single 
function show(req, res) {
  RegionSouth
    .findById(req.params.id)
    .then(regionSouth => {
      if (!regionSouth) res.status(404).json({ message: ' Region Not Found' })
      else res.status(200).json(regionSouth)
    })
    .catch(err => console.log(err))
}


//POST comment
function createComment(req, res) {
  req.body.user = req.currentUser
  RegionSouth
    .findById(req.params.id)
    .populate('comment.user')
    .then(regionSouth => {
      if (!regionSouth) return res.status(404).json({ message: 'Region Not Found' })
      
      regionSouth.comments.push(req.body)
      
      res.status(201).json(regionSouth.comments)
      return regionSouth.save()
    })
    .catch(err => console.log(err))
}


//DELETE comment
function removeComment(req, res) {
  RegionSouth
    .findById(req.params.id)
    .then(regionSouth => {
      if (!regionSouth) return res.status(404).json({ message: 'Region Not Found' })
      
      const commentById = regionSouth.comments.id(req.params.commentId)
      commentById.remove()
      return regionSouth.save()
    })
    .then(regionSouth =>  RegionSouth.populate(regionSouth, 'user comments.user'))
    .then(regionSouth => res.json(regionSouth))
    .catch(err => console.log(err))
}



module.exports = {
  index,
  show,
  createComment,
  removeComment
}