const router = require('express').Router();

router.use('/auth', require('./auth'));
router.use('/product', require('./product'));
router.use('/category', require('./category'));
router.use('/cart', require('./cart'));
router.use('/orders', require('./orders'));

module.exports = router;