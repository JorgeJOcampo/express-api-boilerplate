const express = require('express');
const {
  get,
  getById,
  create,
  update,
  patch
} = require('../controllers/UserController');

const router = express.Router();

router.get('/', get);
router.get('/', getById);
router.post('/', create);
router.put('/', update);
router.patch('/', patch);

module.exports = router;
