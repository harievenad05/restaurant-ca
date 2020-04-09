const {
  createOrdr,
  getAllOrdr,
  getOrdrbyId,
  editOrdr,
  deleteOrdr
} = require('./order.controller');
const router = require('express').Router();

router.post('/', createOrdr);
router.get('/', getAllOrdr);
router.get('/:id', getOrdrbyId);
router.patch('/', editOrdr);
router.delete('/:id', deleteOrdr);



module.exports = router;
