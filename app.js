require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const router       = express.Router()


mongoose
  .connect('mongodb://localhost/stokd', 
    {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// Default value for title local
app.locals.title = 'Hello 👋';


// Routes middleware
/* const index = require('./routes/index');
app.use('/', index);
app.use('/api', require('./router.js'));
 */

app.use('/api', router)

app.use(express.static('dist'))

app.use(bodyParser())

app.get([
  '/',
  '/communities',
  '/current',
  '/regions-north',
  '/regions-south',
  '/regions-east',
  '/register',
  '/login'
], (req, res) => {
  res.sendFile(path.resolve('dist', 'index.html'))
})

app.get('/not-found', (req, res) => {
  res.status(404).sendFile(path.resolve('dist', 'index.html'))
})

app.use('/api/*', (req, res) => res.status(404).json({ message: 'Not Found' }))

app.use('/*', (req, res) => {
  res.redirect('/not-found')
})

module.exports = app;
