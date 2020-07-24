require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const { dbURI, port } = require('./config/environment')
const path = require('path')
const errorHandler = require('./lib/errorHandler')
const router = require('./router')
//const weatherRouter = require('./router');



// ************************ connect mongo to mongoose ************************

mongoose.connect(process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => console.log('Mongo is connected'))

const app = express()


// ************************ middleware ************************

app.use(bodyParser.json())

app.use((req, res, next) => {
  console.log(`${req.method} to ${req.url}`)
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

// ************************ router ************************

app.use('/api', router)
//app.use('/weather', router);


app.use(errorHandler)


app.get('/not-found', (req, res) => {
  res.status(404).sendFile(path.resolve('dist', 'index.html'))
})

app.use('/api/*', (req, res) => res.status(404).json({ message: 'Not Found' }))

app.use('/*', (req, res) => {
  res.redirect('/not-found')
})

// ************************ listen to the port ************************

app.listen(port, () => console.log(`We are good to go on port ${port}`))


