const {
  createOrderItm,
  getAllOrderItm,
  getOrderItmbyId,
  editOrderItm,
  deleteOrderItm
} = require('./orderItem.controller');
const router = require('express').Router();

router.post('/', createOrderItm);
router.get('/', getAllOrderItm);
router.get('/:id', getOrderItmbyId);
router.patch('/', editOrderItm);
router.delete('/:id', deleteOrderItm);



module.exports = router;

