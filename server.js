const express = require('express');

let app = express();
const winston = require('./configs/winston/winston');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes');
const passport = require('passport');
const connectToDatabase = require('./database/database');
const configurePassport = require('./passport/configurePassport');
const {
  devOrigin
} = require('./configs/config.json');

connectToDatabase();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());

app = configurePassport(app);

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    `${devOrigin || process.env.origin}`,
  );
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

app.use(morgan('combined', {
  stream: winston.stream
}));

app.use('/api', router);

app.listen(port);