const express = require('express');

const router = express.Router();

router.get('/', (req, res) => res.send([{ id: 1 }, { id: 2 }]));

router.post('/', (req, res) => {
  const { id } = req.body;
  return res.send({ id });
});

router.put('/', (req, res) => {
  const { id } = req.body;
  return res.send({ id });
});

router.patch('/', (req, res) => {
  const { id } = req.body;
  return res.send({ id });
});

module.exports = router;
