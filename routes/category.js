const router = require('express').Router();

const categoryController = require('../controllers/categoryController');

router.get('/listCategories', categoryController.getCategories);
router.post('/createCategory', categoryController.createCategory);

module.exports = router;