const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.use('/users', usersRouter);
app.use('/', (req, res) =>
  res.send({ message: `Application running in ${process.env.NODE_ENV} mode!` })
);

module.exports = app;
