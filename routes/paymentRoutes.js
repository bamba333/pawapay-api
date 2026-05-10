const express = require('express');

const router = express.Router();

const { deposit } = require('../controllers/paymentController');

const { handleWebhook } = require('../webhooks/webhookController');

router.post('/deposit', deposit);

router.post('/webhook', handleWebhook);

module.exports = router;