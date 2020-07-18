// Global environment variables
const port = process.env.PORT || 5000
const dbURI = process.env.MONGODB_URI || 'mongodb://heroku_lbsp6z98:qlg5r3sei85nsbcgo21o01bc5i@ds211709.mlab.com:11709/heroku_lbsp6z98'
const secret = 'secret string'

module.exports = {
  port,
  dbURI,
  secret
}