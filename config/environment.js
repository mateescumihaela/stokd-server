// Global environment variables
const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/stokd-server'
const secret = 'secret string'

module.exports = {
  port,
  dbURI,
  secret
}