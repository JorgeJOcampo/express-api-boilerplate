const express = require('express');
const {
  get,
  getById,
  create,
  update,
  patch,
  remove
} = require('../controllers/UserController');

const router = express.Router();

router.get('/', get);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.patch('/:id', patch);
router.delete('/:id', remove);

module.exports = router;
