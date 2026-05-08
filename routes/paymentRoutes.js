const express = require('express');

const router = express.Router();

router.post('/deposit', (req, res) => {

    console.log(req.body);

    res.json({
        success: true,
        message: 'Paiement reçu'
    });

});

module.exports = router;