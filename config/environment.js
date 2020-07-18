// Global environment variables
const port = process.env.PORT || 5000
const dbURI = process.env.MONGODB_URI || 'mongodb://heroku_zq1kd1jg:tq0jf487ootgdq4muh573kte7a@ds133017.mlab.com:33017/heroku_zq1kd1jg'
const secret = 'secret string'

module.exports = {
  port,
  dbURI,
  secret
}