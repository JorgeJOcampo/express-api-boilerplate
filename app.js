const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const mongoApiRouter = require('./routes/mongoApi');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

const { MONGO_URL } = process.env;

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log('Connected to %s', MONGO_URL);
    console.log('App is running...');
    console.log('Press CTRL + C to stop the process...');
  })
  .catch((err) => {
    console.error('App starting error:', err.message);
    process.exit(1);
  });

app.use('/users', usersRouter);
app.use('/v1/users', mongoApiRouter);
app.use('/', (req, res) =>
  res.send({ message: `Application running in ${process.env.NODE_ENV} mode!` })
);

module.exports = app;
