const router = require('express').Router();
const passport = require('passport');

const cartController = require('../controllers/cartController');

router.get('/viewCart', passport.authenticate('jwt',{session: false}),cartController.viewCart);
router.post('/addItemToCart',passport.authenticate('jwt',{session: false}), cartController.addItemToCart);
router.put('/updateCart', passport.authenticate('jwt',{session: false}), cartController.updateCart);
router.delete('/deleteItemCart', passport.authenticate('jwt',{session: false}), cartController.deleteItemCart);

module.exports = router;