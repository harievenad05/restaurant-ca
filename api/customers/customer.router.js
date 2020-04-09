const {
  createCus,
  getAllCus,
  getCus,
  editCus,
  deleteCus
} = require('./customer.controller');

const router = require('express').Router();

router.post('/', createCus);
router.get('/', getAllCus);
router.get('/:id', getCus);
router.patch('/', editCus);
router.delete('/:id', deleteCus);


module.exports = router;