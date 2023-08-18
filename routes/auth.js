const router = require('express').Router();

const authController = require('../controllers/authController');

router.post('/sign-up', authController.create);
router.post('/sign-in', authController.createSession);

module.exports = router;