const User = require('../models/User');

module.exports = {
  get: (req, res) => res.send({ message: 'ok' }),
  getById: (req, res) => res.send({ message: 'ok' }),
  create: (req, res) => res.send({ message: 'ok' }),
  update: (req, res) => res.send({ message: 'ok' }),
  patch: (req, res) => res.send({ message: 'ok' })
};
