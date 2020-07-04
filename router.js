const express = require('express');
const router = express.Router()
const communityFunc = require('./controllers/communityFunc')
const cultureBFunc = require('./controllers/regionNorthFunc')
const cultureFFunc = require('./controllers/regionSouthFunc')
const cultureMFunc = require('./controllers/regionEastFunc')
const currentFunc = require('./controllers/currentFunc')
const userFunc = require('./controllers/userFunc')
const secureRoute = require('./lib/secureRoute')


// Community
router.route('/communities')
  .get(communityFunc.index)

router.route('/communities/:id')
  .get(communityFunc.show)

router.route('/communities/:id/comments')
  .post(secureRoute, communityFunc.createComment)

router.route('/communities/:id/comments/:commentId')
  .delete(secureRoute, communityFunc.removeComment)
 

  
// RegionNorth
router.route('/culture-books')
  .get(cultureBFunc.index)

router.route('/culture-books/:id')
  .get(cultureBFunc.show)

router.route('/culture-books/:id/comments')
  .post(secureRoute, cultureBFunc.createComment)

router.route('/culture-books/:id/comments/:commentId')
  .delete(secureRoute, cultureBFunc.removeComment)



// RegionSouth
router.route('/culture-films')
  .get(cultureFFunc.index)

router.route('/culture-films/:id')
  .get(cultureFFunc.show)

router.route('/culture-films/:id/comments')
  .post(secureRoute, cultureFFunc.createComment)

router.route('/culture-films/:id/comments/:commentId')
  .delete(secureRoute, cultureFFunc.removeComment)



// RegionEast
router.route('/culture-music')
  .get(cultureMFunc.index)

router.route('/culture-music/:id')
  .get(cultureMFunc.show)

router.route('/culture-music/:id/comments')
  .post(secureRoute, cultureMFunc.createComment)

router.route('/culture-music/:id/comments/:commentId')
  .delete(secureRoute, cultureMFunc.removeComment)




// Current
router.route('/currents')
  .get(currentFunc.index)

router.route('/currents/:id')
  .get(currentFunc.show)

router.route('/currents/:id/comments')
  .post(secureRoute, currentFunc.createComment)

router.route('/currents/:id/comments/:commentId')
  .delete(secureRoute, currentFunc.removeComment)



// User
router.route('/register')
  .post(userFunc.register)

router.route('/login')
  .post(userFunc.login)



// Dashboard

router.route('/dashboard/:userId')
  .get(secureRoute, userFunc.retrieveLikes)
  .put(secureRoute, userFunc.updateLikes)


module.exports = router