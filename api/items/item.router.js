const {
  createItm,
  getAllItms,
  getItmbyId,
  editItm,
  deleteItm
} = require('./item.controller');
const router = require('express').Router();


router.post('/', createItm);
router.get('/', getAllItms);
router.get('/:id', getItmbyId);
router.patch('/', editItm);
router.delete('/:id', deleteItm);



module.exports = router;