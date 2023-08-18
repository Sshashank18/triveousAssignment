const router = require('express').Router();
const passport = require('passport');

const ordersController = require('../controllers/ordersController');

router.post('/placeOrder',passport.authenticate('jwt',{session: false}), ordersController.placeOrder);
router.get('/orderHistory',passport.authenticate('jwt',{session: false}), ordersController.orderHistory);
router.get('/orderDetail/:id', passport.authenticate('jwt',{session: false}), ordersController.orderDetail);

module.exports = router;