const express = require('express');

const router = express.Router();

const { deposit } = require('../controllers/paymentController');
router.post('/deposit', deposit);

module.exports = router;