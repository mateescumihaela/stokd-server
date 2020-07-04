const port = 8000
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/stokd'
const secret = 'this is my secret string'

module.exports = {
  port,
  dbURI,
  secret
}