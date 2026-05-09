const pawapay = require('../services/pawapayService');

const { v4 : uuidv4 } = require('uuid');

exports.deposit = async (req , res)=>{
        try {

        const {
            phone,
            montant,
            operateur
        } = req.body;

        const response = await pawapay.post('/v2/deposits', {

            depositId: uuidv4(),

            amount:montant.toString(),

            currency: 'XOF',

            country: 'CIV',

            payer: {
                type: 'MMO',
                accountDetails: {
                    phoneNumber: `225${phone}`,
                    provider:operateur
                }
            },
            customerMessage: 'Paiement'
        }
    
    );

        console.log(response.data);
        
        res.json({
            success: true,
            data: response.data
        });

    } catch(error)
    {
        console.error(
            error.response?.data || error.message
        );

        res.status(500).json({
            success: false,
            error: error.response?.data || error.message
        });
    }
};