const router = require('express').Router();

const productController = require('../controllers/productController');

router.get('/getAllProducts', productController.getAllProducts);
router.get('/getProduct/:id', productController.getProduct);
router.post('/createProduct', productController.createProduct);

module.exports = router;