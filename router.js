const router = require('express').Router()
const communityFunc = require('./controllers/communityFunc')
const regionNorthFunc = require('./controllers/regionNorthFunc')
const regionSouthFunc = require('./controllers/regionSouthFunc')
const regionEastFunc = require('./controllers/regionEastFunc')
const currentFunc = require('./controllers/currentFunc')
const userFunc = require('./controllers/userFunc')
const secureRoute = require('./lib/secureRoute')
const getResults = require('./scraper');

//GET home page
router.get("/", async (req, res, next) => {
const result = await getResults();
res.render("index", result);
 });

// communities
router.route('/communities')
  .get(communityFunc.index)


router.route('/communities/:id')
  .get(communityFunc.show)
  // .post(secureRoute, communityFunc.createLikes)


router.route('/communities/:id/comments')
  .post(secureRoute, communityFunc.createComment)


router.route('/communities/:id/comments/:commentId')
  .delete(secureRoute, communityFunc.removeComment)
 

  
// region north
router.route('/regions-north')
  .get(regionNorthFunc.index)


router.route('/regions-north/:id')
  .get(regionNorthFunc.show)


router.route('/regions-north/:id/comments')
  .post(secureRoute, regionNorthFunc.createComment)


router.route('/regions-north/:id/comments/:commentId')
  .delete(secureRoute, regionNorthFunc.removeComment)



// region south
router.route('/regions-south')
  .get(regionSouthFunc.index)


router.route('/regions-south/:id')
  .get(regionSouthFunc.show)


router.route('/regions-south/:id/comments')
  .post(secureRoute, regionSouthFunc.createComment)


router.route('/regions-south/:id/comments/:commentId')
  .delete(secureRoute, regionSouthFunc.removeComment)



// region east
router.route('/regions-east')
  .get(regionEastFunc.index)


router.route('/regions-east/:id')
  .get(regionEastFunc.show)


router.route('/regions-east/:id/comments')
  .post(secureRoute, regionEastFunc.createComment)


router.route('/regions-east/:id/comments/:commentId')
  .delete(secureRoute, regionEastFunc.removeComment)



// news
router.route('/current')
  .get(currentFunc.index)


router.route('/current/:id')
  .get(currentFunc.show)

router.route('/current/:id/comments')
  .post(secureRoute, currentFunc.createComment)


router.route('/current/:id/comments/:commentId')
  .delete(secureRoute, currentFunc.removeComment)



// user
router.route('/register')
  .post(userFunc.register)


router.route('/login')
  .post(userFunc.login)


// dashboard

router.route('/dashboard/:userId')
  .get(secureRoute, userFunc.retrieveLikes)
  .put(secureRoute, userFunc.updateLikes)



module.exports = router