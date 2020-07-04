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
router.route('/regions-north')
  .get(cultureBFunc.index)

router.route('/regions-north/:id')
  .get(cultureBFunc.show)

router.route('/regions-north/:id/comments')
  .post(secureRoute, cultureBFunc.createComment)

router.route('/regions-north/:id/comments/:commentId')
  .delete(secureRoute, cultureBFunc.removeComment)



// RegionSouth
router.route('/regions-south')
  .get(cultureFFunc.index)

router.route('regions-south/:id')
  .get(cultureFFunc.show)

router.route('regions-south/:id/comments')
  .post(secureRoute, cultureFFunc.createComment)

router.route('regions-south/:id/comments/:commentId')
  .delete(secureRoute, cultureFFunc.removeComment)



// RegionEast
router.route('/regions-east')
  .get(cultureMFunc.index)

router.route('/regions-east/:id')
  .get(cultureMFunc.show)

router.route('/regions-east/:id/comments')
  .post(secureRoute, cultureMFunc.createComment)

router.route('/regions-east/:id/comments/:commentId')
  .delete(secureRoute, cultureMFunc.removeComment)




// Current
router.route('/current')
  .get(currentFunc.index)

router.route('/current/:id')
  .get(currentFunc.show)

router.route('/current/:id/comments')
  .post(secureRoute, currentFunc.createComment)

router.route('/current/:id/comments/:commentId')
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